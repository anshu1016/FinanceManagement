const {Income} = require('../model/income.model');


const addIncomeData = async(item)=>{
  try{
    const newItem = new Income(item)
    const saved = await newItem.save();
    console.log("saved Data", saved)
    return saved
  }catch(error){
    throw error
  }
}

const updateIncomeData=async(itemId, itemData)=>{
  try{
    const updatedData = await Income.findByIdAndUpdate(itemId, itemData, {new:true});
    console.log("Update successful")
    return updatedData;

  }catch(error){
    console.error(error)
  }
}

const getAllIncomeItems= async()=>{
  try{
    const incomeItems = await Income.find({});
  return incomeItems
  }catch(error){
    console.error(error)
    throw error
  }
}
const deleteIncomeItem = async(id)=>{
  try{
    await Income.findByIdAndDelete(id);
    const newDataArray = await Income.find({});
    return newDataArray
  }catch(error){
    console.error(error)
  }
}

module.exports= {addIncomeData,
                 updateIncomeData,
                getAllIncomeItems,
                 deleteIncomeItem
                }