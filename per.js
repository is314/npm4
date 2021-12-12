perimeter = (shape) =>{
  sum = 0

  start_point = shape[0]
  for ( i = 1 ; i < shape.length;  i++){
    
    point = shape[i]
    
    side = Math.sqrt(Math.pow(point.x - start_point.x, 2) + Math.pow(point.y - start_point.y, 2))
    
    start_point = point
    sum += side
  }

  start_point = shape[0]
  point = shape.pop()
  
  side = Math.sqrt(Math.pow(point.x - start_point.x, 2) + Math.pow(point.y - start_point.y, 2))
  
  sum += side
  console.log(sum)
  }



let triengle = [
  { x: 0, y: 0 },
  { x: 0, y: 5 },
  { x: 12, y: 0 },
];

perimeter(triengle)
