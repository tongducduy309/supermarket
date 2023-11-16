import items from './items.json' assert { type: "json" };
{/* <div class="col-md-2">
                <div class="item">
                    <img src="./tra-xanh-117.jpg" alt="">
                    <span class="name">Trà xanh</span>
                    <div class="price"><span class="price">200,000</span></div>
                </div>
            </div> */}



function getItems(items,n_cols){

    const contain = document.getElementById("contain");

    if (items.length>0)
        {
            let i=0,j=0;
            let row;
            items.forEach(item => {
                
                
                if (i==0) {
                    row= document.createElement('div');
                    row.className="row";
                }
                
                row.appendChild(getItem(item));
                i++;
                if (i%n_cols==0) {
                    i=0;
                    contain.appendChild(row);
                }
            });
            if (i>0) contain.appendChild(row);
        }
    else{
        contain.innerHTML=`
        <div style="width:100%;text-align:center">
            <h2 style="color: #d7886d;">Chưa có sản phẩm trên kệ</h2>
        </div>
        `
    }
}



function getItem(item){
    var col = document.createElement('div');
    col.className = "col-4 col-sm-3 col-md-3 col-lg-2";
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

$(document).ready(getItems(items,6))