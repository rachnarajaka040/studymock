function searchCandidates() {
  var locationInput = document.getElementById('locationInput').value.toLowerCase();
  var jobRoleInput = document.getElementById('jobRoleInput').value.toLowerCase();

  var filteredCandidates = candidates.filter(candidate => {
    var candidateLocation = candidate.location.toLowerCase();
    var candidateJobRole = candidate.jobRole.toLowerCase();

    if (candidateLocation.includes(locationInput) && candidateJobRole.includes(jobRoleInput)) {
      return true;
    }

    return false;
  });

  displayCandidates(filteredCandidates);
}

function displayCandidates(candidates) {
  var candidateList = document.getElementById('candidateList');
  candidateList.innerHTML = '';

  if (candidates.length === 0) {
    var noResultsItem = document.createElement('li');
    noResultsItem.textContent = 'No results found.';
    candidateList.appendChild(noResultsItem);
    return;
  }

  candidates.forEach(candidate => {
    var candidateItem = document.createElement('li');
    candidateItem.textContent = `${candidate.name} - ${candidate.location} (${candidate.jobRole})`;
    candidateList.appendChild(candidateItem);
  });
}
