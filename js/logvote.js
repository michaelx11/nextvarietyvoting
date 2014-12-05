var myFirebaseRef = new Firebase("https://michaelx-metadata.firebaseio.com/nextvariety/");

function logVote(key) {
    if (key === 'margaretfuller') {
        myFirebaseRef.child('margaretfuller').transaction(function(count) {
            return count + 1;
        }, function(error, committed, snapshot) {
            if (error) {
                console.log('Error: ' + error);
            }
            location.reload();
        });
    } else if (key === 'breakthrough') {
        myFirebaseRef.child('breakthrough').transaction(function(count) {
            return count + 1;
        }, function(error, committed, snapshot) {
            if (error) {
                console.log('Error: ' + error);
            }
            location.reload();
        });
    } else if (key === 'communityart') {
        myFirebaseRef.child('communityart').transaction(function(count) {
            return count + 1;
        }, function(error, committed, snapshot) {
            if (error) {
                console.log('Error: ' + error);
            }
            location.reload();
        });
    }
}
