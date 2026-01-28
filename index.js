#!/usr/bin/env node

import { program } from "commander";
import inquirer from "inquirer";
import { CreateTemplate } from "./commands/create.js";

let args = {
  Group: "org.hytaleCLI",
  Version: "1.0.0",
  Description: "Thank for using HytaleCLI",
  Authors: "",
  Dir: false,
};

program
  .command("create <ProjectName>")
  .description("Create hytale plugin template")
  .option("-s, --skip", "Skip the question")
  .action(async (ProjectName, options) => {
    if (options.skip) {
      CreateTemplate(args, ProjectName);
    } else {
      const answer = await launchQustion();
      CreateTemplate(answer, ProjectName);
    }
  });

const launchQustion = async () => {
  const answer = await inquirer.prompt([
    {
      type: "confirm",
      message: "Do you want to clone in the current directory?",
      name: "Dir",
      default: args.Dir,
    },
    {
      type: "input",
      message: "Choose your plugin Group or let default:",
      name: "Group",
      default: args.Group,
      validate: (input) => {
        const value = input || args.Group;
        const parts = value.split(".");
        if (parts.length < 2) {
          return "Le format doit être comme 'xx.something' (au moins 2 caractères avant le point)";
        }
        if (parts[0].length < 2) {
          return "Le premier segment doit faire au moins 2 caractères";
        }
        return true;
      },
    },
    {
      type: "input",
      message: "Choose your plugin Version or let default:",
      name: "Version",
      default: args.Version,
      validate: (input) => input.trim() !== "" || "La version ne peut pas être vide",
    },
    {
      type: "input",
      message: "Choose your plugin Description or let default:",
      name: "Description",
      default: args.Description,
      validate: (input) => input.trim() !== "" || "La description ne peut pas être vide",
    },
    {
      type: "input",
      message: "Choose your plugin Authors or let default:",
      name: "Authors",
      default: args.Authors,
      validate: (input) => input.trim() !== "" || "Le nom de l'auteur ne peut pas être vide",
    },
  ]);

  return answer;
};

program.parse(process.argv);
