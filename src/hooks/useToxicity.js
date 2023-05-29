import { useEffect, useState } from 'react'
// import '@tensorflow/tfjs'
import * as toxicity from '@tensorflow-models/toxicity'

const useToxicity = (text) => {
  const [loading, setLoading] = useState(true)
  const [isToxic, setIsToxic] = useState(false)
  const [threshold, setThreshold] = useState(0.7);

  useEffect(() => {
    const checkToxicity = async () => {
      setLoading(true)
      const model = await toxicity.load(threshold, [])
      const predictions = await model.classify(text)
      console.log(predictions);
      const toxicPredictions = predictions.filter((p) => p.results[0].match)
      setIsToxic(toxicPredictions.length > 0)
      setLoading(false)
    }
    checkToxicity()
  }, [text, threshold])

  return { loading, isToxic, setThreshold, threshold }
}

export default useToxicity