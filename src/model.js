<<<<<<< HEAD
export default function Model({isVisable,errorMassage="null"}) {

  if(isVisable){

    return (
<div id="model">
 <div className="model-content">
 <h2 style={{color :errorMassage ?"red":"green"} }>
{errorMassage !=null?errorMassage:"The Form Has Been Submitted Successfully"}
</h2>
</div>
 </div>
    );
  }
  else{
    return(<></>)
  }
}
=======
export default function Model({isVisable,errorMassage="null"}) {

  if(isVisable){

    return (
<div id="model">
 <div className="model-content">
 <h2 style={{color :errorMassage ?"red":"green"} }>
{errorMassage !=null?errorMassage:"The Form Has Been Submitted Successfully"}
</h2>
</div>
 </div>
    );
  }
  else{
    return(<></>)
  }
}
>>>>>>> 4651cceef8a6619d87d39d2e34cd4e8835cae5d6
