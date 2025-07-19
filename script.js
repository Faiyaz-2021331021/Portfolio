VANTA.FOG({
  el: "#vanta-bg",
  highlightColor: 0x61dafb,  // Light Blue
  midtoneColor: 0xbb86fc,    // Soft Purple
  lowlightColor: 0x3f51b5,   // Indigo
  baseColor: 0x121212,       // Dark background
  blurFactor: 0.8,
  speed: 1.2,
  zoom: 1
});
function toggleSubTabs() {
  const subTabs = document.getElementById("sub-tabs");
  subTabs.style.display = (subTabs.style.display === "none") ? "block" : "none";
}

