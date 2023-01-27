function threeSum(arr, target) {
  //your code here
	let sum = 0;
	let array =[]
	let min=Number.MIN_SAFE_INTEGER;
	for(let i=0;i<arr.length-2;i++)
		{
for(let j=i;j<=i+2;j++)
	{
		sum=sum + arr[j]
	}
		let	diff= sum-target;
			array.push(diff);
		}
	for(let i=0;i<array.length;i++)
		{
			min = Math.min(array[i],min)
		}
	return min;
}

module.exports = threeSum;
