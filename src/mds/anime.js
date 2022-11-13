const info = [
    {
        "name": "学园孤岛",
        "comment":"萌系 热血 校园 社团 的 丧尸片 ？ ",
        "link":"https://www.bilibili.com/bangumi/play/ep63870"
    },
    {
        "name": "星际牛仔-天国之扉",
        "comment":"论理是那种精彩、教科书式的番，但我看了却没有觉得怎么样...只是对那个手榴弹形打火机印象比较深...应该是我的鉴赏能力还不够...",
        "link":"https://www.bilibili.com/bangumi/play/ss3008/"
    },
    {
        "name": "魔法少女小圆",
        "comment":"什么叫久仰大名啊。虚渊玄的代表作，主角团的人说寄就寄，不愧是你老虚...这部番不太想一个人看，于是就拉着室友一起...",
        "link":"https://www.bilibili.com/bangumi/play/ss2539/"
    },
    {
        "name": "龙与虎",
        "comment":"教科书式的恋爱喜剧番，女主是傲娇的教科书式人物...男女主本来都有各自的target，互相助攻，结果最后这两个人走到了一起...还有就是圣诞节所有人同时失恋的冥场面...",
        "link":"https://www.bilibili.com/bangumi/play/ss1672/"
    },
    {
        "name": "风灵玉秀",
        "comment":"难得看一部国人的作品...同样是吹爆！双女主的故事写得这么精彩，而且很有中国的气息...不愧是DDF大佬。（从B站2022拜年纪入的坑，说来B站为啥要把“祭”改为“纪”啊，受到了什么奇怪的压力吗",
        "link":"https://halihali7.com/acg/25991/1.html?qp=bj"
    },
    {
        "name": "东方梦想夏乡",
        "comment":"仍然是东方家的二创。与万花镜不同的是，这番四年一集，看的哪是番啊，是艺术品...人称奥运番，但是2020东京奥运会推迟，这个的更新却没推迟...嗯，棒！",
        "link":"https://www.bilibili.com/video/BV1Cv411B7go"
    },
    {
        "name": "东方幻想万华镜",
        "comment":"东方家的二创，越共探头（雾）。op和ed挺不错，每集时长有点短，但毕竟是为爱发电啊...只能说声大佬们辛苦了",
        "link":"https://www.bilibili.com/video/BV1jS4y1L7oW"
    },
    {
        "name": "侦探已死",
        "comment":"你见过两集就挂了的女主么...你见过虽然挂了但又完全没有挂了的角色么...当时去看是冲着画的好看去的，但这个剧情展开我大为震撼...",
        "link":"http://www.huabiaosz.com/dm/zhentanyisi/1-1.html"
    },
    {
        "name": "lovelive",
        "comment":"这个企划下的番有好几部，我看了μ's和liella两部，主要是因为前者的果皇和出头鸟、后者的唐可可比较出圈才看的...虹团那部好像有夹脚的名场面，之后说不定会去补。",
        "link":"https://www.bilibili.com/bangumi/play/ss3068/"
    },
    {
        "name": "奇蛋物语",
        "comment":"很新的一部番了，设定又是非常神奇...然而结尾太仓促了点，很多隐藏的设定或情节都还没来得及讲清楚啊...（吐槽一句，阿B太多番要会员了...叔叔你还我小破站",
        "link":"http://www.dmh8.com/player/7972-0-0.html"
    },
    {
        "name": "凉宫春日的消失",
        "comment":"接在凉宫春日的忧郁之后的剧场版，160min左后，当时看完TV版后根本停不下来就看了这个剧场版...涉及到稍微有些复杂的设定，还算精彩，挺值得看的",
        "link":"http://www.zzzfun.com/vod_play_id_1966_sid_1_nid_1.html"
    },
    {
        "name": "凉宫春日的忧郁",
        "comment":"经典老番了，在那个时代强的不行...女主是个充满幻想、总想着找有趣的事情但也非常自我的人，她的想法会改变世界但她却不自知，同时对男主阿虚（キョン）有着特殊感情。男主莫的感情的吐槽超搞笑，歌曲god knows值得一听",
        "link":"https://halihali7.com/acg/810/1.html"
    },
    {
        "name": "寒蝉鸣泣之时",
        "comment":"悬疑恐怖类，第一季讲谜面，第二季谜底，之后2020的业是谜面，卒是谜底，此外还有不少番外篇。前两季还是挺精彩的（墙内在线播放的资源真的难找...我当时是用种子下下来看的...",
        "link":"http://www.dmh8.com/player/5064-0-0.html"
    },
    {
        "name": "甘城光辉游乐园",
        "comment":"这里除了男主，剩下的雄性都不是以人形出现的...这番看着也就图一乐，确实很搞笑就是了（裙底掏枪名场面",
        "link":"https://www.bilibili.com/bangumi/play/ss281/"
    },
    {
        "name": "欢迎来到实力至上主义的教室",
        "comment":"男主莫的感情，智商高到离谱。故事发生在在一个社会达尔文主义的离谱学校，女主看似很强，实则完全在男主的掌控之中...制作精良值得一看。",
        "link":"https://halihali7.com/acg/2847/1.html"
    },
    {
        "name": "龙王的工作",
        "comment":"好像讲的是男主与日本将棋的故事，但他一个人和好多小萝莉在一间屋子里可真刑啊...",
        "link":"https://www.bilibili.com/bangumi/play/ss21554/"
    },
    {
        "name": "一周的朋友",
        "comment":"女主最近一段时间的记忆每周都会消失，然后男主就每周和她交朋友的故事...看着就替男主感觉心累啊...ed挺好听的",
        "link":"https://www.bilibili.com/bangumi/play/ep4131"
    },
    {
        "name": "可塑性记忆",
        "comment":"又是一段注定消失的爱情...女主是和人没什么区别的陪伴型机器人，有着一定的使用寿命...高虐啊",
        "link":"https://www.bilibili.com/bangumi/play/ss1552/"
    },
    {
        "name": "Angel Beats!",
        "comment":"神作！吹爆！讲了带着遗憾死去的青年在另一个世界的故事，有些情节能笑到岔气，有些情节却能虐到窒息...（谁能想到这是专注galgame的key社制作的番呢，哦对还有两集OVA可自行百度",
        "link":"https://www.bilibili.com/bangumi/play/ss959/"
    },
    {
        "name": "声之形",
        "comment":"动漫电影。讲了女主听力弱，小学被同班同学（包括男主）欺负，之后男主想要“赎罪”的故事，算是校园霸凌题材。这里那些人做的不对、问题根源是什么还是值得深思的。还有就是电影本身(129min)以及对原作进行删减，结果大陆上映版还二次删减，B站上的版本逻辑都已经有问题了...",
        "link":"http://www.zzzfun.com/vod_play_id_535_sid_1_nid_1.html"
    },
    {
        "name": "fate stay night",
        "comment":"女角色远坂凛的塑造应该是大成功...和fate zero一样围绕圣杯战争展开，一样是热血番啦",
        "link":"https://www.bilibili.com/bangumi/play/ss1586/"
    },
    {
        "name": "月色真美",
        "comment":"高中生青涩的爱情故事，就是那种作为观众看了都感觉着急的故事...番名也是有典故的哦",
        "link":"https://halihali7.com/acg/2130/1.html"
    },
    {
        "name": "萤火之森",
        "comment":"高虐...陪女主长大的男主设定上只要被人类碰到就会消失不见，也就是说这是一段早晚要消失的爱情...",
        "link":"https://www.bilibili.com/bangumi/play/ss27042/"
    },
    {
        "name": "樱花庄的宠物女孩",
        "comment":"这部番我印象深刻的就两个点，女一椎名真白在樱花树下的唯美场景，以及在女一的天赋衬托下，努力却怎么都无法赶上的男主与女二的无奈...",
        "link":"https://halihali7.com/acg/2563/1.html"
    },
    {
        "name": "路人女主的养成方法",
        "comment":"这番我吹爆，已经刷了两遍不止了...至于哪里好，（大概就是女主比较好吧）当然是剧情、人物塑造、表现力都很棒啊！",
        "link":"https://www.bilibili.com/bangumi/play/ss1512/"
    },
    {
        "name": "Re：从零开始的异世界生活",
        "comment":"初中那会的番了，当时班里已经有人在看，然而我大学才看...异世界穿越轮回题材，也是个经典了，值得一看（不知道B站没有25集版是不是和血腥暴力元素有关）。女仆雷姆拉姆两人的人气比女主还高...",
        "link":"https://halihali7.com/acg/1696/1.html"
    },
    {
        "name": "魔女之旅",
        "comment":"讲了天才魔女伊雷娜（イレイナ）的遭遇，以童话故事的风格包装，但有些故事的内核好黑暗呀...可能值得一提的是，这个魔女太屑了，人称屑魔女...",
        "link":"http://www.dmh8.com/player/7900-2-0.html"
    },
    {
        "name": "青春猪头少年不会梦到兔女郎学姐",
        "comment":"这番有好几个译名...设定只能说比较奇特，男主操作是真的秀...校园四霸之一，值得一看。（《欢迎来到实力至上主义教室》《冰菓》《我的青春恋爱物语果然有问题》《青春猪头少年不会梦到兔女郎学姐》）",
        "link":"https://www.bilibili.com/bangumi/play/ss1650/"
    },
    {
        "name": "fate zero",
        "comment":"我看的第一个热血战斗类番，圣杯战争看着还是挺爽的。（听说fate系列的gal也还不错？",
        "link":"https://www.bilibili.com/bangumi/play/ss1650/"
    },
    {
        "name": "缘〇空",
        "comment":"乡下学校，父母不在，有妹有房...",
        "link":"https://halihali7.com/acg/19888/1.html"
    },
    {
        "name": "辉夜大小姐想让我告白～天才们的恋爱头脑战～",
        "comment":"一个不需要带脑子看的番，沙雕爱情故事笑就完了，谁管男女主感情能不能升温啊(。（听说后面剧情崩坏？就算2022四月开始的第三季也拍不到那，放心看就行）",
        "link":"https://halihali7.com/acg/27281/"
    },
    {
        "name": "我的青春恋爱物语果然有问题",
        "comment":"一男两女的高中日常爱情故事，也是人气番，情感刻画细腻，搞笑元素也不少，应该有些人能共情吧（然而我并没有...）。",
        "link":"https://www.bilibili.com/bangumi/play/ss1539/"
    },
    {
        "name": "魔法禁书目录",
        "comment":"相比于超炮，这部设定更复杂，不过还是值得一看，可以了解更多的设定",
        "link":"https://www.bilibili.com/bangumi/play/ss963/"
    },
    {
        "name": "某科学的一方通行",
        "comment":"质量还算过得去，只是想着追完这个系列",
        "link":"https://halihali7.com/acg/18540/1.html"
    },
    {
        "name": "某科学的超电磁炮",
        "comment":"疫情第一年，高考前寒假开始看，从此入坑日漫~",
        "link":"https://www.bilibili.com/bangumi/play/ep84340"
    },
    {
        "name": "狐妖小红娘",
        "comment":"入坑番，国漫，世界观很新奇！",
        "link":"https://halihali7.com/acg/3773/148.html?qp=bj"
    },
]

export default info