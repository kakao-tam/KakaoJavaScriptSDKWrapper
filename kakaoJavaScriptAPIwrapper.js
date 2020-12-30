/*global Kakao*/
/* eslint-disable no-unused-vars */

var JAVASCRIPT_KEY = "2d68640b56d986af5c8a48505c7c8c71";
var REST_API_KEY = "4408b5bb51bdf4c89879e933556a21e8";
var CLIENT_SECRET = "QZhr9itOs0mxVRDxIvuOfOLzjZMc5q1U";
var ADMIN_KEY = "72462462f6fc9baad63f2de2ad3d865b";
var REDIRECT_URI = "callBackForKakao.php";

Kakao.init(JAVASCRIPT_KEY);
console.log(Kakao.isInitialized());

function loginWithKakao() {
    Kakao.Auth.authorize({
        redirectUri: window.location.origin + '/' + this.REDIRECT_URI
    });
}

function loginWithKakaoPopUp() {
    Kakao.Auth.login({
        success: function (authObj) {
            console.log(authObj);
            //★ 추가 할 것 : 로그인 성공 후 처리 
        },
        fail: function (err) {
            console.log(err)
        }
    })
}

function logoutWithKakao() {
    if (!Kakao.Auth.getAccessToken()) {
        console.log('Not logged in.');
        return;
    }
    console.log("before Logout:" + Kakao.Auth.getAccessToken());
    Kakao.Auth.logout(function () {
        console.log("after Logout:" + Kakao.Auth.getAccessToken());
        //★ 추가 할 것 : 로그아웃 성공 후 처리 
    });
}

function unlinkWithKakao() {
    Kakao.API.request({
        url: '/v1/user/unlink',
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function profileWithKakao() {
    Kakao.API.request({
        url: '/v2/user/me',
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function updateProfile(profile) {
    Kakao.API.request({
        url: '/v1/user/update_profile',
        data: profile,
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function authorize(scope) {
    Kakao.Auth.authorize({
        redirectUri: window.location.origin + '/' + this.REDIRECT_URI,
        scope: scope
    });
}

function talkProfileWithKakao() {
    Kakao.API.request({
        url: '/v1/api/talk/profile',
        success: function(response) {
            console.log(response);
        },
        fail: function(error) {
            console.log(error);
        }
    });
}
