let allPosts = [];
let visible = 6;

function toggleDark() {
  document.body.classList.toggle("dark");
}
function render() {
  const q = document.getElementById("search").value.toLowerCase();
  const container = document.getElementById("posts");
  container.innerHTML = "";

  allPosts
    .filter(p => p.title.toLowerCase().includes(q))
    .slice(0, visible)
    .forEach(p => container.insertAdjacentHTML("beforeend", p.html));
}
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
    // Example JS to dynamically load videos
    const videoFeed = document.getElementById('video-feed');

    const videos = [
      { src: '/video /शक्ति_के_48_नियम.mp4', title: "शक्ति के 48 नियम", desc: "Robert Greene, 48 law's of power." },
      { src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Nature Scene', desc: 'Beautiful natural scenery.' },
      { src: 'https://www.w3schools.com/html/movie.mp4', title: 'City Timelapse', desc: 'Fast-paced city life.' },
      { src: 'https://www.w3schools.com/html/mov_bbb.mp4', title: 'Wildlife Adventure', desc: 'Explore the animal kingdom.' }
    ];

    videos.forEach(video => {
      const card = document.createElement('div');
      card.className = 'video-card';
      card.innerHTML = `
        <video controls preload="metadata">
          <source src="${video.src}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <div class="video-info">
          <h3>${video.title}</h3>
          <p>${video.desc}</p>
        </div>
      `;
      videoFeed.appendChild(card);
    });
       
