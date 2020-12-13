import * as tf from '@tensorflow/tfjs';

import MODEL_HELPERS from 'model/utils/helpers';
import HELPERS from 'utils/helpers';    


const diagnose = async (imgURL, callback) => {
    const mean = new tf.tensor([[[129.38834, 129.38834, 129.38834]]])
    const std = new tf.tensor([[[65.27613, 65.27613, 65.27613]]])

    var image = await HELPERS.image.dataURL2Tensor(imgURL);
    image = tf.expandDims(image, 0);
    image = tf.div(tf.sub(image, mean), std);

    const model = await MODEL_HELPERS.model.load_chexnet();
    var result = await model.predict(image).data()
    result = MODEL_HELPERS.model.diagnosisResult(result);
    HELPERS.localStorageServices.storeData('diagnosis', result);
    callback();

    return result;
}

export default diagnose;


// const diagnose = (imgURL, callback) => {
//     const mean = new tf.tensor([[[129.38834, 129.38834, 129.38834]]])
//     const std = new tf.tensor([[[65.27613, 65.27613, 65.27613]]])
//     HELPERS.image.dataURL2Tensor(imgURL).then( image => {
//         image = tf.expandDims(image, 0);
//         image = tf.div(tf.sub(image, mean), std);
//         console.log(image);

//         const model = MODEL_HELPERS.model.load_chexnet();
//         model.then(result => {
//             result.predict(image).data().then( res => {
//                 const result = MODEL_HELPERS.model.diagnosisResult(res);
//                 HELPERS.localStorageServices.storeData('diagnosis', result);
//                 console.log("inside diagnosis");
//                 console.log(result);
//                 callback();
//                 return result
//             })
//             .catch(error => {
//                 callback();
//                 return error
//             })
//         })
//         .catch(error => {
//             console.log(error);
//             callback(); 
//             return error
//         })
//     })
//     .catch(error => {
//         console.log(error);
//         return error
//     })
    
// }

// export default diagnose;





//  class Diagnose extends Component {
    //     constructor(props) {
    //         super(props)
    //         this.state = {
    //             diagnosing: true,
    //         }
    //     }
    
    //     componentDidMount() {
    //         this._diagnose(this.props.imgURL, this.props.callback);
    //     }
    
    //     _diagnose (imgURL, callback) {
    //         const canvas = HELPERS.image.dataURL2img(imgURL);
    //         let image = tf.browser.fromPixels(canvas);
    //         const norm = new tf.tensor([225.]);
    //         image = tf.expandDims(image, 0);
    //         image = tf.div(image, norm);
    //         console.log(image);
        
    //         const model = MODEL_HELPERS.model.load_chexnet();
    //         model.then(result => {
    //             result.predict(image).data().then( res => {
    //                 const result = MODEL_HELPERS.model.diagnosisResult(res);
    //                 console.log(result);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //         })
    //         .catch(error => {
    //             console.log(error);   
    //         })
    //         this.setState({diagnosing: false});
    //         callback();
    //     }
    
    //     render() {
    //         return (
    //             <div>
    //                 {
    //                     this.state.diagnosing &&
    //                     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height:'100vh',}}>
    //                         <Spin tip="Loading..." size="large" />
    //                     </div>
    //                 }
    //             </div>
    //         );
    //     }
    // }
    
    // export default Diagnose;