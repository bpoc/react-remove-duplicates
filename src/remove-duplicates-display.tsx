import { useRemoveDuplicates } from "./use-remove-duplicates";

export const RemoveDuplicatesDisplay = ({numberList} : {numberList: number[]})=>{
    
    /*todo: write the rest of the function that returns the number 
            list with all the duplicates removed*/
    const removeDuplicates : (numList:number[])=>number[] = 

    //Todo: implement useRemoveDuplicates in the use-remove-duplicates.ts file 
    const {numListWithNoDuplicates} = useRemoveDuplicates(removeDuplicates, numberList);

    return (
        <ul>
            {/* Todo: Add each of the items in numListWithNoDuplicates to this list */}
        </ul>
    )


}