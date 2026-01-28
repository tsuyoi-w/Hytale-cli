# HytaleCLI ![Version](https://img.shields.io/npm/v/hytale-cli?color=blue) ![Downloads](https://img.shields.io/npm/dt/hytale-cli?color=green)

HytaleCLI is a **command-line tool** to quickly create plugin templates for **Hytale**. It automates project structure, `Manifest.json` creation, and initial plugin setup.

---

## 🚀 Installation

Make sure you have **Node.js** installed.

```bash
# Install globally from npm
npm install -g hytale-cli

# Or from source
git clone https://github.com/tsuyoi-w/Hytale-cli
cd HytaleCLI
npm install
npm link
```

---

## ⚡ Usage

### Create a plugin

```bash
hytale create <ProjectName>
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
hytale create MyPlugin --skip
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
hytale create AwesomePlugin
```

Answer the prompts:

```
Do you want to clone in the current directory? (Y/n) : y
Choose your plugin Group or let default: org.myplugin
Choose your plugin Version or let default: 1.0.0
Choose your plugin Description or let default: My first Hytale plugin
Choose your plugin Authors or let default: Tsuyoi
```

Your project will be automatically created in the current folder`.

---

## 💡 Contributing

Contributions and suggestions are welcome!  
Fork the repository, make changes, and submit a **pull request**.

---

**Made by Tsuyoi**

