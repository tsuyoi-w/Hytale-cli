import { exec } from "child_process";
import fs from "fs";
import jsonFile from "jsonfile";
import path from "path";
import { promisify } from "util";

let pathCmd = process.cwd();
const execAsync = promisify(exec);
let gitFolder;
let ManifestDir;
let srcPath;
let settingSrc;

export async function CreateTemplate(args, Projectname) {
  if (args.Dir) {
    await execAsync(
      `git clone https://github.com/tsuyoi-w/Hytale-Plugin-Template.git ${pathCmd}`,
    );
    ManifestDir = "src/main/resources/Manifest.json";
    gitFolder = path.join(process.cwd(), ".git");
    srcPath = path.join(process.cwd(), "src", "main", "java");
    settingSrc = "settings.gradle.kts"
  } else {
    await execAsync(
      `git clone https://github.com/tsuyoi-w/Hytale-Plugin-Template.git ${path.join(pathCmd, Projectname)}`,
    );
    ManifestDir = `${Projectname}/src/main/resources/Manifest.json`;
    gitFolder = path.join(process.cwd(), Projectname, ".git");
    srcPath = path.join(process.cwd(), Projectname, "src", "main", "java");
    settingSrc = path.join(Projectname, "settings.gradle.kts")
  }
  let Group = args.Group.split(".");
  let manifest = {
    Group: args.Group.toLowerCase(),
    Name: Projectname,
    Version: args.Version,
    Description: args.Description,
    Authors: [
      {
        Name: args.Authors,
      },
    ],
    Website: "",
    ServerVersion: "*",
    Dependencies: {},
    OptionalDependencies: {},
    DisabledByDefault: false,
    Main: `${args.Group.toLowerCase()}.Main`,
    IncludesAssetPack: true,
  };
  jsonFile.writeFile(ManifestDir, manifest, { spaces: 2 });
  if (fs.existsSync(gitFolder)) {
    fs.rmSync(gitFolder, { recursive: true, force: true });
  }

  const oldPackagePath = path.join(srcPath, "fr", "tsuyoi");
  const newPackagePath = path.join(srcPath, Group[0], Group[1]);

  fs.mkdirSync(newPackagePath, { recursive: true });
  fs.rmSync(path.join(srcPath, "fr"), { recursive: true, force: true });
  const mainJavaContent = `package ${manifest.Group.toLowerCase()};

import org.checkerframework.checker.nullness.compatqual.NonNullDecl;
import com.hypixel.hytale.server.core.command.system.CommandRegistry;
import com.hypixel.hytale.server.core.plugin.JavaPlugin;
import com.hypixel.hytale.server.core.plugin.JavaPluginInit;

public class Main extends JavaPlugin {

    public Main(@NonNullDecl JavaPluginInit init) {
        super(init);
    }

    @Override
    protected void setup() {
        CommandRegistry commandRegistry = this.getCommandRegistry();
    }
}
`;

  fs.writeFileSync(
    path.join(newPackagePath, "Main.java"),
    mainJavaContent,
    "utf-8",
  );

  const SettingsGradleKTSContent = `rootProject.name = "${Projectname}"`;
  fs.writeFileSync(settingSrc, SettingsGradleKTSContent, "utf-8");
}
