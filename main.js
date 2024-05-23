function createPost() {
  const content = document.getElementById('post-content').value;
  if (content.trim() === '') return;

  const post = document.createElement('div');
  post.className = 'post';
  post.textContent = content;

  document.getElementById('posts').prepend(post);
  document.getElementById('post-content').value = '';
}
