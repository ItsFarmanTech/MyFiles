document.addEventListener('DOMContentLoaded', function() {
    var blogNameElement = document.getElementById("blogName");
    if (blogNameElement) {
     blogNameElement.innerText = BlogName; 
    }
    if (window.location.href.indexOf(BGpageL) > -1) {
      document.getElementById(BGwid).style.display = "none";
    }
    function isAllowedWebsite() {
      var BGrentURL = window.location.href;
      return BGrentURL.includes(BGwedDom);
    }
    if (!isAllowedWebsite()) {
      alert("Please purchase the BG-Safelink Script for your Domain, Directly from the owner, Farman Qureshi. Message on WhatsApp at [ +918445031253 ] for more information.");
      var bgW = document.getElementById('bgwLoad');
      if (bgW) {
       bgW.style.display = "none"; 
      }
      var bgWW = document.getElementById('bgwwLoad');
      if (bgWW) {
       bgWW.style.display = "block"; 
      }
      var BGp = document.getElementById('bgLoad');
      if (BGp) {
        BGp.style.textAlign = "-webkit-center";
        BGp.innerHTML = "<h4 style='font-family:bgFont;'>Please purchase the BG-Safelink Script for your Domain<br/>Directly from the owner, <span style='color:red;'>Farman Qureshi</span>.<br/>Message on WhatsApp at [ <span style='color:red;'>+918445031253</span> ] for more information</h4><br/><a class='foil-image iftbtn-1 iftbtn-2' href='https://wa.link/uj57hb' style='font-family:bgFont;color:#fff;' target='_blank'>Buy Now</a>";
      }
      var bgmainBTN1 = document.getElementById("bgMainBTN1");
      if (bgmainBTN1) {
        bgmainBTN1.style.display = "none";
      }
      var bgmainBTN2 = document.getElementById("bgMainBTN2");
      if (bgmainBTN2) {
        bgmainBTN2.style.display = "none";
      }
    }
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    function removeUrlParameter() {
        const url = new URL(window.location);
        url.searchParams.delete('go');
        window.history.replaceState({}, document.title, url.pathname);
    }
    async function fetchRSSFeed() {
        const rssUrl = location.protocol + "//" + window.location.hostname + "/feeds/posts/default?alt=rss";
        const response = await fetch(rssUrl);
        const text = await response.text();
        const parser = new DOMParser();
        const xml = parser.parseFromString(text, 'application/xml');
        const items = Array.from(xml.querySelectorAll('item'));
        return items.map(item => item.querySelector('link').textContent);
    }
    async function mainFunctionToCall(parameterValue) {
        localStorage.setItem('parameterValue', parameterValue);
        const postLinks = await fetchRSSFeed();

        var bgmainBTN1 = document.getElementById("bgMainBTN1");
        var bgmainBTN2 = document.getElementById("bgMainBTN2");

        function showButtonWithTimer(element, text, seconds, callback) {
            let remaining = seconds;
            element.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${text} (${remaining})</div></div>`;
            const interval = setInterval(() => {
                remaining -= 1;
                element.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${text} (${remaining})</div></div>`;
                if (remaining <= 0) {
                    clearInterval(interval);
                    callback();
                }
            }, 1000);
        }

        function navigateToPost(stepId) {
            let currentIndex = sessionStorage.getItem('currentIndex') || 0;
            currentIndex = parseInt(currentIndex);
            if (currentIndex < postLinks.length) {
                sessionStorage.setItem('currentIndex', currentIndex + 1);
                sessionStorage.setItem('step', stepId === '#generate' ? '1' : '2');
                window.location.href = postLinks[currentIndex] + stepId;
            } else {
                console.error('No more posts available.');
            }
        }

        function continueProcess() {
            const currentIndex = sessionStorage.getItem('currentIndex') || 0;
  			function bgStep1() {
  				var adBeforeBTN1 = document.getElementById("adBeforeBTN1");
                                if (adBeforeBTN1) {
                                  adBeforeBTN1.style.textAlign = "-webkit-center";
  				  adHBeforeBTN1(); 
                                }
  				var adAfterBTN1 = document.getElementById("adAfterBTN1");
                                if (adAfterBTN1) {
  				  adAfterBTN1.style.textAlign = "-webkit-center";
  				  adHAfterBTN1();
                                }
                showButtonWithTimer(bgmainBTN1, 'Please Wait...', notRobotTimer, () => {
           			bgmainBTN1.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='robotBtn'>I'm not a robot</div></div>`;
           			document.getElementById('robotBtn').addEventListener('click', () => {
             			navigateToPost('#generate');
           			});
        		});
            }
  			bgStep1();
        }
        continueProcess();
    }
    async function mainFunctionToCall2() {
      const postLinks = await fetchRSSFeed();

        var bgmainBTN1 = document.getElementById("bgMainBTN1");
        var bgmainBTN2 = document.getElementById("bgMainBTN2");

        function showButtonWithTimer(element, text, seconds, callback) {
            let remaining = seconds;
            element.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${text} (${remaining})</div></div>`;
            const interval = setInterval(() => {
                remaining -= 1;
                element.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${text} (${remaining})</div></div>`;
                if (remaining <= 0) {
                    clearInterval(interval);
                    callback();
                }
            }, 1000);
        }

        function navigateToPost(stepId) {
            let currentIndex = sessionStorage.getItem('currentIndex') || 0;
            currentIndex = parseInt(currentIndex);
            if (currentIndex < postLinks.length) {
                sessionStorage.setItem('currentIndex', currentIndex + 1);
                sessionStorage.setItem('step', stepId === '#generate' ? '1' : '2');
                window.location.href = postLinks[currentIndex] + stepId;
            } else {
                console.error('No more posts available.');
            }
        }

        function continueProcess() {
            const currentIndex = sessionStorage.getItem('currentIndex') || 0;

            function bgStep2() {
  				var adBeforeBTN1 = document.getElementById("adBeforeBTN1");
                                if (adBeforeBTN1) {
  				  adBeforeBTN1.style.textAlign = "-webkit-center";
  				  adHBeforeBTN1();
                                }
  				var adAfterBTN1 = document.getElementById("adAfterBTN1");
                                if (adAfterBTN1) {
  				  adAfterBTN1.style.textAlign = "-webkit-center";
  				  adHAfterBTN1();
                                }
                showButtonWithTimer(bgmainBTN1, 'Please Wait...', generateLinkTimer, () => {
                    bgmainBTN1.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='generateLinkBtn'>Click to generate link</div></div>`;
                    document.getElementById('generateLinkBtn').addEventListener('click', () => {
                        document.getElementById('bgMainBTN2').scrollIntoView({behavior: 'auto'});
  						var adBeforeBTN2 = document.getElementById("adBeforeBTN2");
                                                if (adBeforeBTN2) {
  						  adBeforeBTN2.style.textAlign = "-webkit-center";
  						  adHBeforeBTN2();
                                                }
  						var adAfterBTN2 = document.getElementById("adAfterBTN2");
                                                if (adAfterBTN2) {
  						  adAfterBTN2.style.textAlign = "-webkit-center";
  						  adHAfterBTN2();
                                                }
                        showButtonWithTimer(bgmainBTN2, 'Please Wait...', getLinkTimer, () => {
                            bgmainBTN2.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='getLinkBtn'>Get link</div></div>`;
                            document.getElementById('getLinkBtn').addEventListener('click', () => {
                                navigateToPost('#goto');
                            });
                        });
                    });
                });
            } 
  			bgStep2();
        }
        continueProcess();
    }
    async function mainFunctionToCall3() {
      var parameterValue = localStorage.getItem('parameterValue');
      var secretKey = "852b8e15d245c63eff0f9a53bf87325db43d0218a44948e45b89ab9ce0a43384";
      var decodeLink = atob(parameterValue);
      var decryptedBytes = CryptoJS.AES.decrypt(decodeLink, secretKey);
      var decryptedUrl = decryptedBytes.toString(CryptoJS.enc.Utf8);
      const postLinks = await fetchRSSFeed();

        var bgmainBTN1 = document.getElementById("bgMainBTN1");
        var bgmainBTN2 = document.getElementById("bgMainBTN2");

        function showButtonWithTimer(element, text, seconds, callback) {
            let remaining = seconds;
            element.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${text} (${remaining})</div></div>`;
            const interval = setInterval(() => {
                remaining -= 1;
                element.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image'>${text} (${remaining})</div></div>`;
                if (remaining <= 0) {
                    clearInterval(interval);
                    callback();
                }
            }, 1000);
        }

        function navigateToPost(stepId) {
            let currentIndex = sessionStorage.getItem('currentIndex') || 0;
            currentIndex = parseInt(currentIndex);
            if (currentIndex < postLinks.length) {
                sessionStorage.setItem('currentIndex', currentIndex + 1);
                sessionStorage.setItem('step', stepId === '#generate' ? '1' : '2');
                window.location.href = postLinks[currentIndex] + stepId;
            } else {
                console.error('No more posts available.');
            }
        }

        function continueProcess() {
            const currentIndex = sessionStorage.getItem('currentIndex') || 0;

            function bgStep3() {
  				var adBeforeBTN1 = document.getElementById("adBeforeBTN1");
                                if (adBeforeBTN1) {
  				  adBeforeBTN1.style.textAlign = "-webkit-center";
  				  adHBeforeBTN1();
                                }
  				var adAfterBTN1 = document.getElementById("adAfterBTN1");
                                if (adAfterBTN1) {
  				  adAfterBTN1.style.textAlign = "-webkit-center";
  				  adHAfterBTN1();
                                }
                showButtonWithTimer(bgmainBTN1, 'Please Wait...', verifyLinkTimer, () => {
                    bgmainBTN1.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='verifyLinkBtn'>Verify link</div></div>`;
                    document.getElementById('verifyLinkBtn').addEventListener('click', () => {
                        document.getElementById('bgMainBTN2').scrollIntoView({behavior: 'auto'});
  						var adBeforeBTN2 = document.getElementById("adBeforeBTN2");
                                                if (adBeforeBTN2) {
  						  adBeforeBTN2.style.textAlign = "-webkit-center";
  						  adHBeforeBTN2();
                                                }
  						var adAfterBTN2 = document.getElementById("adAfterBTN2");
                                                if (adAfterBTN2) {
  						  adAfterBTN2.style.textAlign = "-webkit-center";
  						  adHAfterBTN2();
                                                }
                        showButtonWithTimer(bgmainBTN2, 'Please Wait...', goToLinkTimer, () => {
                            bgmainBTN2.innerHTML = `<div class='bgBtnCon'><div class='bgHomeBtn foil-image' id='goToDownloadLinkBtn'>Go to download link</div></div>`;
                            document.getElementById('goToDownloadLinkBtn').addEventListener('click', () => {
                                window.location.href = decryptedUrl;
                            });
                        });
                    });
                });
            } 
  			bgStep3();
        }
        continueProcess();
    }
    var goParameter = getUrlParameter('go');
    if (goParameter) {
        var BgWid = document.getElementById(BGwid);
  	if (BgWid) {
    	    BgWid.style.display = "none";
  	}
        removeUrlParameter();
        mainFunctionToCall(goParameter);
    } 
    if (window.location.href.includes('#generate')) {
  	var BgWid = document.getElementById(BGwid);
  	if (BgWid) {
    	    BgWid.style.display = "none";
  	}
        mainFunctionToCall2();
    }
    if (window.location.href.includes('#goto')) {
  	var BgWid = document.getElementById(BGwid);
  	if (BgWid) {
    	    BgWid.style.display = "none";
  	}
        mainFunctionToCall3();
    }
});
    
function encryptLink(mainLink, secretKey) {
  return CryptoJS.AES.encrypt(mainLink, secretKey).toString();
}
var btnGenerate = document.getElementById('btngenerate');
if (btnGenerate) {
  btnGenerate.addEventListener('click', function() {
    var generateloading = document.getElementById('generateloading');
    var generatelink = document.getElementById('generatelink');
    var mainLink = document.getElementById("generateurl").value;
    var resultLink = document.getElementById("resulturl");
    var inval = document.getElementById('inval');
    inval.style.display = "none";
    if (!/^https?:\/\//i.test(mainLink)) {
        resultLink.value = "";
        generatelink.style.display = 'none';
        inval.style.display = "block";
        inval.innerHTML = "Please enter a URL starting with 'http://' or 'https://'";
        return;
    }
    var secretKey = "852b8e15d245c63eff0f9a53bf87325db43d0218a44948e45b89ab9ce0a43384";
    var encryptedUrl = encryptLink(mainLink, secretKey);
    var encodedLink = btoa(encryptedUrl);
    var finalUrl = location.protocol + "//" + window.location.hostname + "/?go=" + encodedLink;
    resultLink.value = "";
    generatelink.style.display = 'none';
    setTimeout(function() {
        generateloading.style.display = 'none';
        generatelink.style.display = 'block';
        resultLink.value = finalUrl;
    }, 1000);
    generateloading.style.display = 'block';
  });
}
var copytoclipboard = document.getElementById('copytoclipboard');
if (copytoclipboard) {
  copytoclipboard.addEventListener('click', function() {
    var copyButton = document.getElementById('copytoclipboard');
    var resultLink = document.getElementById("resulturl").value;
    navigator.clipboard.writeText('').then(function() {
        return navigator.clipboard.writeText(resultLink);
    }).then(function() {
        copyButton.innerHTML = "<span class='fa fa-check'></span> Link Copied to Clipboard";
        setTimeout(function() {
          copyButton.innerHTML = "<span class='fa fa-floppy-o'></span> Copy URL";
        }, 2000);
    }).catch(function(err) {
        console.error('Failed to copy url: ', err);
    });
  });
}
var widgetClo = document.querySelector(".widget-close");
if (widgetClo) {
  widgetClo.addEventListener('click', function() {
    var bgS = document.getElementById( 'bgS');
    bgS.style.display = 'none';
    var generateurl = document.getElementById("generateurl");
    var resulurl = document.getElementById("resulturl");
    generateurl.value = "";
    resulurl.value = "";
    var generateloading = document.getElementById('generateloading');
    var generatelink = document.getElementById('generatelink');
    var inval = document.getElementById('inval');
    inval.style.display = "none";
    generateloading.style.display = "none";
    generatelink.style.display = "none";
  });
}
var logo = document.getElementById('logo');
if (logo) {
  logo.addEventListener('click', function() {
    var bgS = document.getElementById( 'bgS');
    bgS.style.display = 'flex';
  });
}
