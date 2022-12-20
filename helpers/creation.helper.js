const {idTypeEnum} = require("../constants");

module.exports = {
    defineType: (fieldId) => {
        if(fieldId.includes('@')){
            return idTypeEnum.EMAIL;
        }

        return idTypeEnum.PHONE;
    }

}

