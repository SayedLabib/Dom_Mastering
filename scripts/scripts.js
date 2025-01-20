

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


                   //  Update CartCount
           
                   const cartCount = getConvertedValue('Cart-Count');

                   if(cartCount+1>6)
                      {
                        alert('You have reached your limit');
                        return;
                      }
        
                   event.target.setAttribute('disabled', false);
                   event.target.parentNode.parentNode.style.backgroundColor = "#e6641e";
                   document.getElementById('Cart-Count').innerText = cartCount + 1;
           
           updateTotalCost(price);
           updateBudget(price);
        //    updateCartCount();
           updateGrandTotalCost();
           updateLeftCount();
           
          });

 
    }


// Update GrandTotal Cost

function updateGrandTotalCost(applied)
{
   
    const totalCost = getConvertedValue('Total-cost');

    if(applied)
    {
        const couponCode = document.getElementById('coupon-code').value;
        
        if(couponCode === 'New20')
            {
              const discountedPrice = totalCost * .2;
              
              document.getElementById('grand-total').innerText = totalCost - discountedPrice;
                  
            }
         else
         {
            alert('Please enter a valid coupon code');
         }
    }
    else{
    
     document.getElementById('grand-total').innerText = totalCost;
    }
       
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

// Budget Update
function updateBudget(update)
{
    const budget = getConvertedValue('Budget');
    
    document.getElementById('Budget').innerText = budget - parseInt(update);  
    
}

// Cart Count Update

// function updateCartCount()
// {
    
//     const cartCount = getConvertedValue('Cart-Count');

//      if(cartCount+1>6)
//         {
//           alert('You have reached your limit');
//           return;
//         }

//     const updateCartCount = document.getElementById('Cart-Count').innerText = cartCount + 1;
      

//     return updateCartCount;
// }

function updateLeftCount()
{

    const left = getConvertedValue('Left');
     
    if(left-1<0)
        {
         return;
        }

    const updateLeftCount = document.getElementById('Left').innerText = left - 1;
    return updateLeftCount;
}



