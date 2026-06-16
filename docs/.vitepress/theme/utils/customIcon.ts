import {localIconLoader} from "vitepress-plugin-group-icons";

export const customIcon = {
    almalinux: localIconLoader(
        import.meta.url,
        "../../../public/iconify/almaLinux.svg",
    ),
    c: localIconLoader(import.meta.url, "../../../public/iconify/c.svg"),
    idea: localIconLoader(
        import.meta.url,
        "../../../public/iconify/idea.svg",
    ),
    webstorm: localIconLoader(
        import.meta.url,
        "../../../public/iconify/webstorm.svg",
    ),
    ubuntu: localIconLoader(
        import.meta.url,
        "../../../public/iconify/ubuntu.svg",
    ),
    h: localIconLoader(import.meta.url, "../../../public/iconify/c.svg"),
    cpp: localIconLoader(import.meta.url, "../../../public/iconify/cpp.svg"),
    java: "vscode-icons:file-type-java",
    winget: "vscode-icons:file-type-shell",
    dockerfile: "vscode-icons:file-type-docker2",
    toml: "vscode-icons:file-type-toml",
    lua: "vscode-icons:file-type-lua",
    scoop: localIconLoader(
        import.meta.url,
        "../../../public/iconify/scoop.svg",
    ),
    choco: localIconLoader(
        import.meta.url,
        "../../../public/iconify/choco.svg",
    ),
    "控制台": localIconLoader(
        import.meta.url,
        "../../../public/iconify/terminal.svg",
    ),
    cmd: "vscode-icons:file-type-shell",
    powershell: "vscode-icons:file-type-powershell",
    maven: "vscode-icons:file-type-apache",
    gradle: "vscode-icons:file-type-light-gradle",
    git: "vscode-icons:file-type-git",
    bash: "vscode-icons:file-type-gnu",
    // 'shell': 'vscode-icons:file-type-gnu',
    shell: localIconLoader(
        import.meta.url,
        "../../../public/iconify/shell.svg",
    ),
    sh: localIconLoader(
        import.meta.url,
        "../../../public/iconify/shell.svg",
    ),
    fish: localIconLoader(
        import.meta.url,
        "../../../public/iconify/fish.svg",
    ),
    cpu: localIconLoader(import.meta.url, "../../../public/iconify/cpu.svg"),
    "项目结构": localIconLoader(
        import.meta.url,
        "../../../public/iconify/architecture.svg",
    ),
    effect: localIconLoader(
        import.meta.url,
        "../../../public/iconify/effect.svg",
    ),
    "结果": localIconLoader(
        import.meta.url,
        "../../../public/iconify/effect.svg",
    ),
    faq: localIconLoader(
        import.meta.url,
        "../../../public/iconify/reply.svg",
    ),
    bytecode: localIconLoader(
        import.meta.url,
        "../../../public/iconify/bytecode.svg",
    ),
    "字节码指令": localIconLoader(
        import.meta.url,
        "../../../public/iconify/bytecode.svg",
    ),
    chrome: localIconLoader(
        import.meta.url,
        "../../../public/iconify/chrome.svg",
    ),
    firefox: localIconLoader(
        import.meta.url,
        "../../../public/iconify/firefox.svg",
    ),
    edge: localIconLoader(
        import.meta.url,
        "../../../public/iconify/edge.svg",
    ),
    arthas: localIconLoader(
        import.meta.url,
        "../../../public/iconify/arthas.svg",
    ),
    log: localIconLoader(import.meta.url, "../../../public/iconify/log.svg"),
    "日志": localIconLoader(
        import.meta.url,
        "../../../public/iconify/log.svg",
    ),
    linux: localIconLoader(
        import.meta.url,
        "../../../public/iconify/linux.svg",
    ),
    Linux: localIconLoader(
        import.meta.url,
        "../../../public/iconify/linux.svg",
    ),
    windows: localIconLoader(
        import.meta.url,
        "../../../public/iconify/windows.svg",
    ),
    Windows: localIconLoader(
        import.meta.url,
        "../../../public/iconify/windows.svg",
    ),
    sql: "vscode-icons:file-type-sql",
}