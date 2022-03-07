
const App = () => {
  var x1 = 10;
  var x2 = 5;
  var sum = x1/x2;
  var y = "Demo";
  y = 100.34;
  y = true;
  var my_array = [2,4,3,5,78,99,45,23];
  var l = my_array.length;
  return (
    <div>
      <h1>Hello ReactJs</h1>
      <h1>sum : {sum}</h1>
      <h1>{x1+100}</h1>
      <h1>y : {y+""}</h1>

      <h1>{my_array[2]}</h1>
      <h1>{my_array.length}</h1>
      <h1>{my_array[l-1]}</h1>
      {
        my_array.map((item,i)=>{
          return(
            <div>
              <label style={{fontSize:37,paddingLeft:15}}>{(i+1)+". "+item}</label>
            </div>
          )
        })
      }
    </div>
  )
}
export default App;