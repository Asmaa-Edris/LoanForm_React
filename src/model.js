
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

