export function toggleContainerVisibility(containers, currentContainerIndex) {
  containers.forEach((container, index) => {
    if (index === currentContainerIndex) {
      container.classList.remove('hidden');
    } else {
      container.classList.add('hidden');
    }
  });
}

export function showNextContainer(containers, currentContainerIndex) {
  currentContainerIndex = (currentContainerIndex + 1) % containers.length;
  toggleContainerVisibility(containers, currentContainerIndex);
}

export function showPreviousContainer(containers, currentContainerIndex) {
  currentContainerIndex = (currentContainerIndex - 1 + containers.length) % containers.length;
  toggleContainerVisibility(containers, currentContainerIndex);
}
