import smoothscroll from 'smoothscroll-polyfill';

smoothscroll.polyfill();

const options = { behavior: 'smooth' };
const $ = (id) => document.querySelector(id);

$('#aboutUsLink').addEventListener('click', () => $('#aboutUsSection').scrollIntoView(options));
$('#whatWeDoLink').addEventListener('click', () => $('#whatWeDoSection').scrollIntoView(options));
$('#missionLink').addEventListener('click', () => $('#missionSection').scrollIntoView(options));
$('#partnersLink').addEventListener('click', () => $('#partnersSection').scrollIntoView(options));
$('#contactsLink').addEventListener('click', () => $('#contactsSection').scrollIntoView(options));
