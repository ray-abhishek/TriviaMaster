const removeHTMLEntities = (questionObject)=>{
    
    questionObject.forEach((item)=>{
        let qFormatted = item["question"]
        qFormatted = qFormatted.replace(/&quot;/g,'"')
        qFormatted = qFormatted.replace(/&amp;/g,'&')
        qFormatted = qFormatted.replace(/&#039;/g,'\'')
        item["question"]=qFormatted

        let correctAnsFormatted = item["correct_answer"]
        correctAnsFormatted = correctAnsFormatted.replace(/&quot;/g,'"')
        correctAnsFormatted = correctAnsFormatted.replace(/&amp;/g,'&')
        correctAnsFormatted = correctAnsFormatted.replace(/&#039;/g,'\'')
        item["correct_answer"]=correctAnsFormatted

        let incorrectAnsFormatted = item["incorrect_answers"]
        incorrectAnsFormatted = incorrectAnsFormatted.map((ans=>{
            ans = ans.replace(/&quot;/g,'"')
            ans = ans.replace(/&amp;/g,'&')
            ans = ans.replace(/&#039;/g,'\'')
            return ans
        }))
        item["incorrect_answers"]=incorrectAnsFormatted
    })

    return questionObject
}

export default removeHTMLEntities;