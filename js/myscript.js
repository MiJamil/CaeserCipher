
function resetForm() {
	setTimeout(function() {
		nameSetEncrypt();
	}, 0);
	return true;
}

function nameSetDecrypt() {
	document.getElementById('encryptDecrypt').innerHTML = "Decrypt";
	document.getElementById('message').placeholder = "Message to decrypt";
	document.getElementById('key').placeholder = "Key for decryption";
	document.getElementById('output').placeholder = "Decrypted message appears here";
}

function nameSetEncrypt() {
	document.getElementById('encryptDecrypt').innerHTML = "Encrypt";
	document.getElementById('message').placeholder = "Message to encrypt";
	document.getElementById('key').placeholder = "Key for encryption";
	document.getElementById('output').placeholder = "Encrypted message appears here";
}

function cipher() {
	var msg = document.getElementById('message').value;
	var key = document.getElementById('key').value;
	if (document.getElementById('encrypt').checked) {
		var outMsg = encrypt(msg, key);
		document.getElementById('output').value = outMsg;
	} else if (document.getElementById('decrypt').checked) {
		var outMsg = decrypt(msg, key);
		document.getElementById('output').value = outMsg;
	}


}

function encrypt(msg, key) {
	key = key % 26;
	var lowerCaseMsg = msg.toLowerCase();
	var alph = "abcdefghijklmnopqrstuvwxyz".split("");
	var newMsg = "";

	for (var i = 0; i < lowerCaseMsg.length; i++) {
		var currChar = lowerCaseMsg[i];
		if (currChar === ' ') {
			newMsg += currChar;
			continue;
		}
		var currIndex = alph.indexOf(currChar);
		var newIndex = currIndex + key;
		if (newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = 26 + newIndex;
		if (msg[i] === msg[i].toUpperCase()) {
			newMsg += alph[newIndex].toUpperCase();
		}
		else newMsg += alph[newIndex];
	}
	return newMsg;
}

function decrypt(msg, key) {
	key = key % 26;
	var lowerCaseMsg = msg.toLowerCase();
	var alph = "abcdefghijklmnopqrstuvwxyz".split("");
	var newMsg = "";

	for (var i = 0; i < lowerCaseMsg.length; i++) {
		var currChar = lowerCaseMsg[i];
		if (currChar === ' ') {
			newMsg += currChar;
			continue;
		}
		var currIndex = alph.indexOf(currChar);
		var newIndex = currIndex - key;
		if (newIndex > 25) newIndex = newIndex - 26;
		if (newIndex < 0) newIndex = 26 + newIndex;
		if (msg[i] === msg[i].toUpperCase()) {
			newMsg += alph[newIndex].toUpperCase();
		}
		else newMsg += alph[newIndex];
	}
	return newMsg;
}
