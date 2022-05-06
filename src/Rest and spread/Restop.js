//Demonstrating Rest and Spread operators with simple examples
const Restop = () => {
    const array1 = ["red", "blue", "orange", "green"];
    const array2 = ["fower", "car", "fruit", "tree"];
    const newarray = [...array1, ...array2];
  
    //Adding array to function
  
    const course = "Machine Learning";
  
    console.log([...course]);
  
    const myName = ["peter", "is", "my"];
    const aboutMe = ["he", ...myName, "coordinator"]; //SPREAD operator copying one arraay to other array
    const newarr = [...aboutMe, "spread operator as first array"];
  
    const obj = { name: "Srav", place: "India", state: "Karnataka" };
    //  destructuring object with variables and one rest variable:
    const newobj = { ...obj };
    //spread Operator extending elements
    const numarray = [1, 2, 3, 4, 99, 88, 77, 60, 20];
  
    //spread operator did not copy myName’s firstName property into the bio object because bio already contains a firstName property.
  
    const sravani = { firstName: "Mokshith", lastName: "amjuru" };
    const bio = { ...sravani, firstName: "maneeshai", color: "pink" };
  
    console.log(bio);
  
    function sum(a, b, c, d, e, f, g, h, i) {
      return a + b + c + d + e + f + g + h + i;
    }
    console.log(sum(...numarray));
  
    function restop(...array1) {
      console.log(array1);
    }
    restop([1, 2, 3, 4]);
    return (
      <div>
        <h1>{newarray}</h1>
        <h1>{array1}</h1>
        <h1>{myName}</h1>
        <h1>{aboutMe}</h1>
        <h1>{newarr}</h1>
        <h1>{JSON.stringify(obj)}</h1>
        <h1>{JSON.stringify(newobj)}</h1>
        {console.log(obj)}
        {console.log(aboutMe)}
      </div>
    );
  };
  export default Restop;