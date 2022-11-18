fetch("https://suzuki-dev.com:3150/messages")
    .then((response) => response.json())
    .then((ranking) => {
        const array = Object.entries(ranking);
        array.sort((a, b) => {
            return b[1] - a[1];
        })
        const sortedObj = Object.fromEntries(array);
        
        const main = document.getElementById("main");
        const rankingTable = document.createElement("table");
        const rankingHeader = document.createElement("thead");
        const rankingBody = document.createElement("tbody");
        const rankingHeaderLine = document.createElement("tr");
        const rankingHeaderTitle1 = document.createElement("th");
        const rankingHeaderTitle2 = document.createElement("th");
        const rankingHeaderTitle3 = document.createElement("th");

        /* ヘッダー */
        rankingHeaderTitle1.textContent = "順位";
        rankingHeaderTitle1.style.border = "1px solid black"
        rankingHeaderTitle1.style.width = "20%";

        rankingHeaderTitle2.textContent = "ID";
        rankingHeaderTitle2.style.border = "1px solid black"
        rankingHeaderTitle2.style.width = "60%";

        rankingHeaderTitle3.textContent = "コメント数";
        rankingHeaderTitle3.style.border = "1px solid black";
        rankingHeaderTitle3.style.align = "left"


        rankingHeaderLine.appendChild(rankingHeaderTitle1);
        rankingHeaderLine.appendChild(rankingHeaderTitle2);
        rankingHeaderLine.appendChild(rankingHeaderTitle3)
        rankingHeader.appendChild(rankingHeaderLine);

        /* テーブルボディー */
        const rankingKeys = Object.keys(sortedObj);
        rankingKeys.forEach((value, index) => {
            if (sortedObj[value] < 30) return;
            const row = document.createElement("tr");
            const place = document.createElement("th");
            const id = document.createElement("th");
            const size = document.createElement("th");
            place.textContent = index + 1;
            place.style.border = "1px solid black"
            id.textContent = value;
            id.style.textAlign = "left";
            id.style.border = "1px solid black"
            size.textContent = sortedObj[value];
            size.style.textAlign = "left";
            size.style.border = "1px solid black"
            row.appendChild(place)
            row.appendChild(id);
            row.appendChild(size);
            rankingBody.appendChild(row);
        })

        // /* テーブル */
        rankingTable.appendChild(rankingHeader);
        rankingTable.appendChild(rankingBody);
        rankingTable.style.width = "60%";
        rankingTable.style.border = "1px solid black"
        rankingTable.style.borderCollapse = "collapse"

        main.appendChild(rankingTable);
    });