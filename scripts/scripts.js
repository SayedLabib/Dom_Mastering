

const allBtn = document.getElementsByClassName('btn-primary');

for(const btn of allBtn)
    {
          btn.addEventListener('click',function(event){
                const name = event.target.parentNode.parentNode.childNodes[1].innerText;
                const price = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;
                const category = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;
                
           const selectedPlayer = document.getElementById('selected-player-container');     
                
           const div = document.createElement('div');
           div.classList.add('flex');
           div.classList.add('flex-row');
           div.classList.add('justify-center');
           div.classList.add('items-center');
           div.classList.add('gap-20');
           div.classList.add('-ml-5');
           div.classList.add('align-center');
            
           const p1 = document.createElement('p');
           const p2 = document.createElement('p');
           const p3 = document.createElement('p');
         
           p1.innerText = name;
           p2.innerText = price;
           p3.innerText = category;

           div.appendChild(p1);
           div.appendChild(p2);
           div.appendChild(p3);
            
           selectedPlayer.appendChild(div);
           
           updateTotalCost(price);
           updateGrandTotalCost();

          });

 
    }


// Update GrandTotal Cost

function updateGrandTotalCost()
{
   const totalCost = getConvertedValue('Total-cost');
   document.getElementById('grand-total').innerText = totalCost;
}



// calculating the total cost

function updateTotalCost(value)
{
    const totalCost = getConvertedValue('Total-cost');
    const sum = totalCost + parseInt(value);
    document.getElementById('Total-cost').innerText = sum;
    
}





// Converted to parseInt function created
function getConvertedValue(elementId)
{
    const Value = document.getElementById(elementId);
    const getValue = Value.innerText;
    const convertedValue = parseInt(getValue);
    return convertedValue;
    
}



