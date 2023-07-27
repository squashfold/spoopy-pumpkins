import type { NextApiRequest, NextApiResponse } from 'next'
import type FoodItem from '../../interfaces/foodItem'

const items = require('../../cache/foodData').data

export default (req: NextApiRequest, res: NextApiResponse) => {
    const currentItem = req.query.current ? req.query.current.toString() : ''

    const dataArray = currentItem.length ? items.filter((item: FoodItem) => item.name !== currentItem) : items;

    // Randomly select two items from the array
    function getRandomItems(array: FoodItem[], numItems: number) {
        const shuffled = array.slice(); // Make a copy of the original array
        let i = array.length;
        const min = i - numItems;
        let temp;
        let index;
    
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }

    return shuffled.slice(min);
  }
  
  const numItemsToSelect = 2;
  const randomItems = getRandomItems(dataArray, numItemsToSelect);
    
  // Remove the selected items from the original array
  randomItems.forEach((item: FoodItem) => {
    const index = dataArray.findIndex((element: any) => element.name === item.name);
    if (index !== -1) {
      dataArray.splice(index, 1);
    }
  });

  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({ randomItems }))
}