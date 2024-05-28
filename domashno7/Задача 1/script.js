document.getElementById('red-box').addEventListener('click', (event) => {
    event.stopPropagation()
    alert('You clicked on the red box')
  });

  document.getElementById('green-box').addEventListener('click', (event) => {
    event.stopPropagation()
    alert('You clicked on the green box')
  });

  document.getElementById('blue-box').addEventListener('click', (event) => {
    event.stopPropagation()
    alert('You clicked on the blue box')
  });
