# HytaleCLI ![Version](https://img.shields.io/npm/v/hytalecli?color=blue) ![Downloads](https://img.shields.io/npm/dt/hytalecli?color=green) ![License](https://img.shields.io/github/license/tsuyoi-w/HytaleCLI)

HytaleCLI is a **command-line tool** to quickly create plugin templates for **Hytale**. It automates project structure, `Manifest.json` creation, and initial plugin setup.

---

## 🚀 Installation

Make sure you have **Node.js** installed (v18+ recommended).

```bash
# Install globally from npm
npm install -g hytalecli

# Or from source
git clone https://github.com/tsuyoi-w/HytaleCLI.git
cd HytaleCLI
npm install
npm link
```

---

## ⚡ Usage

### Create a plugin

```bash
hytalecli create <ProjectName>
```

You will be prompted to configure:

- Installation directory
- **Group** (e.g., `org.mynamespace`)
- Plugin version
- Plugin description
- Author name

#### Options

- `-s, --skip` : skip prompts and use default values.

**Example:**

```bash
hytalecli create MyPlugin --skip
```

This will create a plugin named `MyPlugin` using default settings.

---

## 📂 Project Structure

```
MyPlugin/
├─ src/main/java/<group>/<project>/Main.java
├─ src/main/resources/Manifest.json
├─ settings.gradle.kts
```

`Manifest.json` is automatically generated:

```json
{
  "Group": "org.hytalecli",
  "Name": "MyPlugin",
  "Version": "1.0.0",
  "Description": "Thank you for using HytaleCLI",
  "Authors": [{"Name": "YourName"}],
  "Website": "",
  "ServerVersion": "*",
  "Dependencies": {},
  "OptionalDependencies": {},
  "DisabledByDefault": false,
  "Main": "org.hytalecli.Main",
  "IncludesAssetPack": true
}
```

---

## 🔧 Features

- Automatically create **Hytale plugin templates**
- Generates Java package structure based on `Group`
- Auto-generates `settings.gradle.kts`
- Removes the initial Git repository to avoid conflicts
- Option to create the project in the current directory or a new folder

---

## 📝 Quick Example

```bash
hytalecli create AwesomePlugin
```

Answer the prompts:

```
Do you want to clone in the current directory? (Y/n) : y
Choose your plugin Group or let default: org.myplugin
Choose your plugin Version or let default: 1.0.0
Choose your plugin Description or let default: My first Hytale plugin
Choose your plugin Authors or let default: Tsuyoi
```

Your project will be automatically created in `./AwesomePlugin`.

---

## 💡 Contributing

Contributions and suggestions are welcome!  
Fork the repository, make changes, and submit a **pull request**.

---

## 📜 License

MIT License. See the `LICENSE` file for more details.

---

**Made with ❤️ by Tsuyoi**

---

## 🔹 Gitignore for Node.js

To ignore `node_modules`, create a `.gitignore` file at the root of your project and add:

```
node_modules/
npm-debug.log*
.DS_Store
```
