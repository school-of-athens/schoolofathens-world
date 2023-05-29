import "@tensorflow/tfjs";
import * as toxicity from "@tensorflow-models/toxicity";

// const checkToxicity = async (text) => {
//     const model = await toxicity.load(0.8);
//     const predictions = await model.classify(text);
//     // return predictions;
// }

// console.log(checkToxicity(["You suck!"]));

toxicity.load(0.8).then((model) => {
  // Now you can use the `model` object to label sentences.
  model.classify(["you suck"]).then((predictions) => {
    console.log(predictions);
  });
});
