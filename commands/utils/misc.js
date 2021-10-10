const objectToMessageFields = (obj) => {
    console.log(`objectToMessageFields`, obj)
    let fields = []
    for(let [k, v] of Object.entries(obj)) {
        if(v === null || v === undefined) continue
       fields.push({
           name: k,
           value: v.toString()
       })
    }
    return fields
}

module.exports = {
    objectToMessageFields
}
