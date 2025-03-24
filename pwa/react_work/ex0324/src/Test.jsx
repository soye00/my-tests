import BB from "./BB.jsx";

function Test(){
    // console.log('Test');
    return (
        <>
            <div>
                {/*{BB()}-> 가독성이 좋지 않아 사용 X*/}
                <BB aa = "10" bb ="20"></BB>
                <h1>Test</h1>
                <p>Lorem ssfljksdkdldjskldj, sdkfljfdksjl</p>
            </div>
        </>
    )
}

export default Test;