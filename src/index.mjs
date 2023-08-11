import "./styles.css";


//add button を押したとき
const onClickAdd = () => {
  //get textbox's input and initialize
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
}

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("imcomplete-list").removeChild(target);
}

//未完了リストに追加する関数
const createIncompleteList = (text) => {
    //make div
  const div = document.createElement("div");
  div.className = "list-row";

  //make li
  const li = document.createElement("li");
  li.innerText = text;

  //make button --complete--
  const completeButton = document.createElement("button");
  completeButton.innerText = "done";
  completeButton.addEventListener("click", () => {
    //divタグを未完了リストからdelete
    deleteFromIncompleteList(completeButton.parentNode);

    //完了リストに追加
    const addTarget = completeButton.parentNode;
    
    //todo内容をテキストを取得
    const text = addTarget.firstElementChild.innerText;
    
    // div以下を初期化
    addTarget.textContent = null;

    //make li
    const li = document.createElement("li");
    li.innerText = text;
    
    //make button
    const backButton = document.createElement("button");
    backButton.innerText = "undo";

    backButton.addEventListener("click", () => {

      //要素を削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);


      //text取得
      const text = backButton.parentNode.firstElementChild.innerText;
      console.log(text);
      createIncompleteList(text);

    });

    
    //divの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(div);
        
  })

  //make button --delete--
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete"
  deleteButton.addEventListener("click", () => {
    //divタグを未完了リストからdelete
    deleteFromIncompleteList(deleteButton.parentNode);
    
  })

  //divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("imcomplete-list").appendChild(div);
}

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
