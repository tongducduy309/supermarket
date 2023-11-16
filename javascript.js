// import items from './items.json' assert { type: "json" };
function getItem(item){
    var col = document.createElement('div');
    col.className = "col-6 col-sm-3 col-md-3 col-lg-2";
    var ite = document.createElement('div');
    ite.className="item";
    var img = document.createElement('img');
    img.alt="Hình mẫu";
    var name = document.createElement('span');
    name.className="name";
    var price = document.createElement('div');
    var span = document.createElement('span');
    price.className="price";
    span.className="price";
    price.appendChild(span)

    img.src = item["img"];

    name.innerHTML = item["name"]

    span.innerHTML = item["price"]

    ite.appendChild(img)
    ite.appendChild(name)
    ite.appendChild(price)
    col.appendChild(ite)
    return col

}
function getItems(items){

    const contain = document.getElementById("contain");

    if (items.length>0)
        {
            let i=0,j=0;
            let row= document.createElement('div');
            row.className="row";
            items.forEach(item => {
                
                row.appendChild(getItem(item));
                }
            );
            contain.appendChild(row);
        }
    else{
        contain.innerHTML=`
        <div style="width:100%;text-align:center">
            <h2 style="color: #d7886d;">Chưa có sản phẩm trên kệ</h2>
        </div>
        `
    }

}
$(document).ready(
    
    fetch('./items.json')
    .then((response) => response.json())
    .then((json) => getItems(json))
    
)