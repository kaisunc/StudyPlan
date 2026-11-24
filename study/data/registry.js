// Content registry. Each data file calls STUDY.add({...}) for one subject-term.
window.STUDY = { terms: [], add(term) { this.terms.push(term); } };
