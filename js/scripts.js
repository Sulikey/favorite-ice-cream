addEventListener('load', function() {
  const flavors = ['rocky road', 'mint', 'chocolate', 'mango sorbet'];
  const ul = document.createElement('ul');
  flavors.forEach(function(flavor) {
    const li = document.createElement('li');
    li.append(flavor);
    ul.append(li);
  });
  const body = document.querySelector('body');
  body.append(ul);
});