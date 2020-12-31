/*global Kakao*/
/* eslint-disable no-unused-vars */

var JAVASCRIPT_KEY = "2d68640b56d986af5c8a48505c7c8c71";
var REST_API_KEY = "4408b5bb51bdf4c89879e933556a21e8";
var CLIENT_SECRET = "QZhr9itOs0mxVRDxIvuOfOLzjZMc5q1U";
var ADMIN_KEY = "72462462f6fc9baad63f2de2ad3d865b";
var REDIRECT_URI = "callBackForKakao.php";
var CHANNEL_ID = "_GVVxnK";

Kakao.init(JAVASCRIPT_KEY);
console.log(Kakao.isInitialized());

function login() {
    Kakao.Auth.authorize({
        redirectUri: window.location.origin + '/' + this.REDIRECT_URI
    });
}

function loginPopUp() {
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

function logout() {
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

function unlink() {
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

function profile() {
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

function talkProfile() {
    Kakao.API.request({
        url: '/v1/api/talk/profile',
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function talkFriendList() {
    Kakao.API.request({
        url: '/v1/api/talk/friends',
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function btn_link_send() {
    Kakao.Link.createDefaultButton({
        container: '#btn-link-send',
        objectType: 'feed',
        content: {
            title: '디저트 사진',
            description: '아메리카노, 빵, 케익',
            imageUrl:
                'http://mud-kage.kakao.co.kr/dn/NTmhS/btqfEUdFAUf/FjKzkZsnoeE4o19klTOVI1/openlink_640x640s.jpg',
            link: {
                mobileWebUrl: 'https://developers.kakao.com',
                androidExecParams: 'test',
            },
        },
        social: {
            likeCount: 10,
            commentCount: 20,
            sharedCount: 30,
        },
        buttons: [
            {
                title: '웹으로 이동',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                },
            },
            {
                title: '앱으로 이동',
                link: {
                    mobileWebUrl: 'https://developers.kakao.com',
                },
            },
        ]
    });
}

function btn_link_scrap(requestUrl) {
    Kakao.Link.createScrapButton({
        container: '#btn-link-scrap',
        requestUrl: requestUrl
    });
}

function btn_link_template(templateId) {
    Kakao.Link.createCustomButton({
        container: '#btn-link-template',
        templateId: templateId,
        templateArgs: {
            'title': '제목 영역입니다.',
            'description': '설명 영역입니다.'
        }
    });
}

function defaultSend() {
    Kakao.API.request({
        url: '/v2/api/talk/memo/default/send',
        data: {
            template_object: {
                object_type: 'feed',
                content: {
                    title: '카카오톡 링크 4.0',
                    description: '디폴트 템플릿 FEED',
                    image_url:
                        'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                    link: {
                        web_url: 'https://developers.kakao.com',
                        mobile_web_url: 'https://developers.kakao.com',
                    },
                },
                social: {
                    like_count: 100,
                    comment_count: 200,
                },
                button_title: '바로 확인',
            },
        },
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function defaultScrapSend(request_url) {
    Kakao.API.request({
        url: '/v2/api/talk/memo/scrap/send',
        data: {
            request_url: request_url,
        },
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function defaultTemplateSend(template_id) {
    Kakao.API.request({
        url: '/v2/api/talk/memo/send',
        data: {
            template_id: template_id,
        },
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function friendSend(receiver_uuids) {
    Kakao.API.request({
        url: '/v1/api/talk/friends/message/default/send',
        data: {
            receiver_uuids: [receiver_uuids],
            template_object: {
                object_type: 'feed',
                content: {
                    title: '카카오톡 링크 4.0',
                    description: '디폴트 템플릿 FEED',
                    image_url:
                        'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
                    link: {
                        web_url: 'https://developers.kakao.com',
                        mobile_web_url: 'https://developers.kakao.com',
                    },
                },
                social: {
                    like_count: 100,
                    comment_count: 200,
                },
                button_title: '바로 확인',
            },
        },
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function friendScrapSend(request_url, receiver_uuids) {
    Kakao.API.request({
        url: '/v1/api/talk/friends/message/scrap/send',
        data: {
            receiver_uuids: [receiver_uuids],
            request_url: request_url,
        },
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        },
    });
}

function friendTemplateSend(template_id, receiver_uuids) {
    Kakao.API.request({
        url: '/v1/api/talk/friends/message/send',
        data: {
            receiver_uuids: [receiver_uuids],
            template_id: template_id
        },
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}

function btn_story_share(url, text) {
    Kakao.Story.createShareButton({
        container: '#btn-story-share',
        url: url,
        text: text
    });
}

function storyShare(url, text) {
    Kakao.Story.share({
        url: url,
        text: text
    });
}

function storyAppShare(url, text) {
    Kakao.Story.open({
        url: url,
        text: text
    });
}

function btn_story_flow(id) {
    Kakao.Story.createFollowButton({
        container: '#btn-tory-flow',
        id: id
    });
}

function btn_channel_added() {
    Kakao.Channel.createAddChannelButton({
        container: '#btn-channel-added',
        channelPublicId: CHANNEL_ID
    });
}

function btn_channel_chat() {
    Kakao.Channel.createChatButton({
        container: '#btn-channel-chat',
        channelPublicId: CHANNEL_ID
    });
}

function channelPlusfriends() {
    Kakao.API.request({
        url: '/v1/api/talk/plusfriends',
        success: function (response) {
            console.log(response);
        },
        fail: function (error) {
            console.log(error);
        }
    });
}
