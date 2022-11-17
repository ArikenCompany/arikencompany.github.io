fetch("https://suzuki-dev.com:3150/commands")
    .then((response) => response.json())
    .then((commands) => {
        const main = document.getElementById("main");
        const commandsTable = document.createElement("table");
        const commandsHeader = document.createElement("thead");
        const commandsBody = document.createElement("tbody");
        const commandsHeaderLine = document.createElement("tr");
        const commandsHeaderTitle1 = document.createElement("th");
        const commandsHeaderTitle2 = document.createElement("th");

        /* ヘッダー */
        commandsHeaderTitle1.textContent = "コマンド名";
        commandsHeaderTitle1.style.border = "1px solid black"
        commandsHeaderTitle1.style.width = "20%";

        commandsHeaderTitle2.textContent = "内容";
        commandsHeaderTitle2.style.border = "1px solid black";
        commandsHeaderTitle2.style.align = "left"


        commandsHeaderLine.appendChild(commandsHeaderTitle1);
        commandsHeaderLine.appendChild(commandsHeaderTitle2);
        commandsHeader.appendChild(commandsHeaderLine);

        /* テーブルボディー */
        const commandsKeys = Object.keys(commands);
        commandsKeys.forEach((value, index) => {
            const row = document.createElement("tr");
            const commandName = document.createElement("th");
            const commandValue = document.createElement("th");
            commandName.textContent = value;
            commandName.style.textAlign = "left";
            commandName.style.border = "1px solid black"
            commandValue.textContent = commands[value];
            commandValue.style.textAlign = "left";
            commandValue.style.border = "1px solid black"
            row.appendChild(commandName);
            row.appendChild(commandValue);
            commandsBody.appendChild(row);
        })

        /* テーブル */
        commandsTable.appendChild(commandsHeader);
        commandsTable.appendChild(commandsBody);
        commandsTable.style.width = "60%";
        commandsTable.style.border = "1px solid black"
        commandsTable.style.borderCollapse = "collapse"
        commandsTable.id = "commands-table"

        main.appendChild(commandsTable);
    })