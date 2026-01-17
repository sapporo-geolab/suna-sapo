/**
 * 砂箱の状態に応じてボタンを出し分けるポップアップ生成ロジック
 */
function getPopupHTML(props, isGray, logIdx) {
    const statusText = isGray ? 
        `<div style="color: #ff3b30; font-size: 11px; font-weight: bold; margin-bottom: 5px;">現在、砂切れ報告が出ています</div>
         <button class="pop-btn report-btn-disabled" disabled>砂切れをみんなに教える</button>
         <button class="pop-btn done-btn-green" onclick="markAsDone(${logIdx})">補充完了を報告</button>` : 
        `<button class="pop-btn report-btn-red" onclick="reportEmpty(${props.id})">砂切れをみんなに教える</button>`;

    return `
        <div style="font-family: sans-serif; width: 220px; color: #333; text-align: center;">
            <img src="https://raw.githubusercontent.com/sapporo-geolab/suna-img/main/suna.jpg" style="width:100%; border-radius:8px;">
            <p style="margin: 10px 0 5px; font-size:14px; text-align: left;"><strong>${props.address}</strong></p>
            ${statusText}
        </div>`;
}