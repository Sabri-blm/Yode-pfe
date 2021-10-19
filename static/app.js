let fadeElement = [...document.querySelectorAll('.fade-up')];
let fadeIn = [...document.querySelectorAll('.fade-in')];
let fadeIn2 = [...document.querySelectorAll('.fade-in2')];
let fadeIn3 = [...document.querySelectorAll('.fadeImg')];
let fadeIn4 = [...document.querySelectorAll('.fadeImg2')];

let options = {
    rootMargin: '-10%',
    threshold: 0.0
}

/* --------------text's transition---------------- */

let observer = new IntersectionObserver(showItem, options);

function showItem(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('active');
        }
    })
}

fadeElement.forEach(item => {
    observer.observe(item);
})

/* --------------flask's transition--------------- */

let observer2 = new IntersectionObserver(showItem2, options);

function showItem2(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('in');
        }
    })
}

fadeIn.forEach(item => {
    observer2.observe(item);
})


/* --------------html's transition---------------- */

let observer3 = new IntersectionObserver(showItem3, options);

function showItem3(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('in2');
        }
    })
}

fadeIn2.forEach(item => {
    observer3.observe(item);
})

/* --------------question's movements----------------------- */

function onClick(id){
    let element = document.getElementById(id);
    let childes = element.childNodes;
    childes[1].classList.toggle("turn");

    let sibling = element.nextElementSibling;

    if( sibling.style.height == ""){
        sibling.style.height = "fit-content";
        sibling.style.padding = "10px 20px";
        /* sibling.style.transition = "height 3s"; */
    }else{
        sibling.style.height = "";
        sibling.style.padding = "";
    }

}

/* --------------html's transition---------------- */

let observer4 = new IntersectionObserver(showItem4, options);

function showItem4(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('imggg');
        }
    })
}

fadeIn3.forEach(item => {
    observer4.observe(item);
})

/* --------------html's transition---------------- */

let observer5 = new IntersectionObserver(showItem5, options);

function showItem5(entries){
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('imgggg');
        }
    })
}

fadeIn4.forEach(item => {
    observer5.observe(item);
})







let swipeChld = document.querySelector('#circle')

const FrenchMenu = ["LSA", "Demo", "Question"];
const French1 = ["Le premier site web de détection de la langue des signes arabe avec Yolov5","Testez-le"];
const French2 = ["Testez-le","Sélectionnez une image et commencez la détection","Choisissez une image ...","Choisissez le type de détection","Optimale","Avancé","Expert","Soumettre","Démarrer la détection en temps réel",' <img src="../static/images/webcam-512_2.png" alt="webcam" id="webcam" width="100px" style="margin: auto;"> <br> <br> <br> <span style="font-size: 20px;">Live</span> ','Cliquez sur "q" pour sortir du mode detection en temp réel'];
const French22 = ["Les types de detection","Optimale","Détection rapide ( environ 0.01par image )","Précision moyenne","Avancé","Détection normale (environ 0,015 par image)","Précision élevé","Expert","Détection lente (environ 0,03 par image)","Précision maximale"];
const French3 = ["Langue des signes arabe","La langue des signes arabe (LSA) est la principale méthode de communication entre les personnes malentendantes ou sourdes et les membres de leur communauté qui interagissent avec elles au sein des communautés arabes. Il existe certainement d'autres formes de communication, cependant, ces méthodes peuvent ne pas prendre en charge l'interaction naturelle, où le destinataire du message de communication n'a pas à apprendre la langue des signes ou toute autre méthode de communication.","L'alphabet de LSA","La langue des signes arabe contient 28 lettres alphabétiques principales commençant par ''Alif'' et se terminant par ''Ya'' toutes représentées par un geste de la main"];
const FrenchQues = ["FAQ","Avez-vous des questions ?","Combien de versions différentes de la langue des signes arabe existent ? <i id='down1' class='fas fa-chevron-down'></i>","Contrairement à l'arabe parlé, les langues des signes arabes (ArSL) ne sont pas diglossiques. Cela signifie qu'il existe une version d'une langue des signes arabe utilisée par une communauté, plutôt que deux versions.","La langue des signes arabe utilise-t-elle plus que des gestes de la main ? <i id='down1' class='fas fa-chevron-down'></i>","En plus des « signes », la langue des signes arabe comprend des expressions faciales, des gestes et un langage corporel pour communiquer. La langue des signes utilise son propre système de grammaire, qui implique des structures de phrases différentes de l'arabe parlé.","Quelle est la meilleure façon de communiquer avec une personne sourde si je ne connais pas la langue des signes ? <i id='down1' class='fas fa-chevron-down'></i>","Les personnes sourdes veulent aussi vraiment faire partie du monde des entendants. Ils veulent communiquer. Ainsi, ils le découvriront par tous les moyens nécessaires. Qu'il s'agisse de taper sur un téléphone, d'écrire, de vous apprendre à signer les bases absolues, juste pour faire passer le message.","Existe-t-il une langue des signes universelle ? <i id='down1' class='fas fa-chevron-down'></i>","Non, même pas près. En réalité, il existe autant de langues des signes que de langues parlées. De la langue des signes américaine ou britannique à la langue des signes arabe, chacune est aussi similaire aux autres que le chinois l'est à l'anglais.<br>Comme toute langue, la langue des signes s'est établie au sein de certaines communautés et a été influencée par les influences régionales et culturelles qui entouraient ses locuteurs natifs."];
const FrenchFeed = ["Donnez-nous votre avis !","Nom complet","Adresse email","Votre message"];
const FrenchFeedValue = ["Entrez votre nom ...","Entrer votre @email ...","Écrivez vos commentaires ..."];

const ArabMenu = ["اللغة", "جرب", "أسئلة"];
const Arab1 = ["Yolov5 أول موقع للكشف عن لغة الإشارة العربية مع","اختبرها"];                   
const Arab2 = ["اختبرها","حدد صورة وابدأ الاكتشاف","... اختر صورة","اختر نوع الكشف","أفضل","متقدم","خبير","إرسال","ابدأ الاكتشاف في الوقت الفعلي",'<img src="../static/images/webcam-512_2.png" alt="webcam" id="webcam" width="100px" style="margin: auto;"> <br> <br> <br> <span style="font-size: 20px;">مباشر</span> ',' "q" للخروج من وضع الكشف في الوقت الفعلي أنقر على '];
const Arab22 = ["أنواع الكشف","أفضل","الكشف السريع (حوالي 0.01 لكل إطار)","دقة متوسطة","متقدم","الكشف الطبيعي (حوالي 0.015 لكل إطار)","دقة عالية","خبير","الاكتشاف البطيء (حوالي 0.03 لكل إطار)","دقة القصوى"];
const Arab3 = ["لغة الإشارة العربية", "لغة الإشارة هي الطريقة الأساسية للتواصل بين الأشخاص الذين يعانون من ضعف السمع أو الصم وأفراد مجتمعهم الذين يتفاعلون معهم. هناك بالتأكيد أشكال أخرى للتواصل ، ومع ذلك ، قد لا تدعم هذه الأساليب التفاعل الطبيعي ، حيث لا يتعين على متلقي رسالة الاتصال تعلم لغة الإشارة أو أي وسيلة اتصال أخرى.","أبجدية اللغة","لغة الإشارة العربية من 28 حرفًا أبجديًا رئيسيًا تبدأ بالحرف ألف وتنتهي بالحرف ياء كلها ممثلة بإشارة اليد"];      
const ArabQues = ["أسئلة","هل لديكم أسئلة ؟"," <i id='down1' class='fas fa-chevron-down'></i> كم عدد الإصدارات المختلفة للغة الإشارة العربية الموجودة؟","على عكس اللغة العربية المنطوقة ، فإن لغات الإشارة العربية ليست ثنائية اللغة. هذا يعني أن هناك إصدارًا واحدًا للغة الإشارة العربية يستخدمه المجتمع بدلاً من نسختين.","هل تستخدم لغة الإشارة العربية أكثر من إيماءات اليد؟ <i id='down1' class='fas fa-chevron-down'></i>","بالإضافة إلى 'الإشارات' ، تشتمل لغة الإشارة العربية على تعابير الوجه والإيماءات ولغة الجسد للتواصل. تستخدم لغة الإشارة نظامها النحوي الخاص بها ، والذي يتضمن تراكيب جمل مختلفة عن اللغة العربية المنطوقة."," <i id='down1' class='fas fa-chevron-down'></i> ما هي أفضل طريقة للتواصل مع شخص أصم إذا لم أكن أعرف لغة الإشارة؟","يريد الصم أيضًا أن يكونوا جزءًا من عالم السمع. يريدون التواصل. وبالتالي ، سوف يكتشفونه بأي وسيلة ضرورية. سواء كان الأمر يتعلق بكتابة الهاتف ، أو الكتابة ، أو تعليم نفسك كيفية التوقيع على الأساسيات المطلقة ، فقط لتوضيح الفكرة."," <i id='down1' class='fas fa-chevron-down'></i> هل توجد لغة إشارة عالمية؟","لا ، ولا حتى قريبة. في الواقع ، هناك العديد من لغات الإشارة كما هو الحال في اللغات المنطوقة. من لغة الإشارة الأمريكية أو البريطانية إلى لغة الإشارة العربية ، كل منها مشابه للآخرين مثل الصينية إلى الإنجليزية.<br>مثل أي لغة ، رسخت لغة الإشارة نفسها داخل مجتمعات معينة وتأثرت بالتأثيرات الإقليمية والثقافية التي أحاطت بمتحدثيها الأصليين."];
const ArabFeed = ["! أعطنا رأيك","اسمك","بريدك الإلكتروني","رسالتك"];
const ArabicFeedValue = [" ... أدخل أسمك","... أدخل بريدك الإلكتروني","... اكتب تعليقاتك"];


function swipe() {
    var arabMenu = [...document.querySelectorAll('.ArabMenu')];
    var frenchMenu = [...document.querySelectorAll('.FrenchMenu')];
    var arabic1 = [...document.querySelectorAll('.Arab1')];
    var french1 = [...document.querySelectorAll('.French1')];
    var arabic2 = [...document.querySelectorAll('.Arab2')];
    var french2 = [...document.querySelectorAll('.French2')];
    var arabic22 = [...document.querySelectorAll('.Arab22')];
    var french22 = [...document.querySelectorAll('.French22')];
    var arabic3 = [...document.querySelectorAll('.Arab3')];
    var french3 = [...document.querySelectorAll('.French3')];
    var arabicQues = [...document.querySelectorAll('.ArabQues')];
    var frenchQues = [...document.querySelectorAll('.FrenchQues')];
    var arabicFeed = [...document.querySelectorAll('.ArabFeed')];
    var frenchFeed = [...document.querySelectorAll('.FrenchFeed')];
    var frenchFeedValue = [...document.querySelectorAll('.FrenchFeedValue')];
    var arabicFeedValue = [...document.querySelectorAll('.ArabicFeedValue')];

    var left = document.querySelector('.left');
    var left2 = document.querySelector('.left2');
    var right = document.querySelector('.right');
    var right2 = document.querySelector('.right2');

    var submit = document.querySelector('#sub');

    var quest = [...document.querySelectorAll(".quest")];
    
    swipeChld.classList.toggle('swiping');
    let i = 0;
    /* console.log(french1); */

    if(french1.length == 0){
    arabMenu.forEach(item => {
        item.innerHTML = ArabMenu[i];
        item.classList.toggle("FrenchMenu");
        item.classList.toggle("ArabMenu");
        i++;
    })
    i = 0;
    arabic1.forEach(item => {
        item.innerHTML = Arab1[i];
        item.classList.toggle("French1");
        item.classList.toggle("Arab1");
        i++;
    })
    i=0;
    arabic2.forEach(item => {
        item.innerHTML = Arab2[i];
        item.classList.toggle("French2");
        item.classList.toggle("Arab2");
        i++;
    })
    i=0;
    arabic22.forEach(item => {
        item.innerHTML = Arab22[i];
        item.classList.toggle("French22");
        item.classList.toggle("Arab22");
        i++;
    })
    i=0;
    arabic3.forEach(item => {
        item.innerHTML = Arab3[i];
        item.classList.toggle("French3");
        item.classList.toggle("Arab3");
        i++;
    })
    i=0;
    arabicQues.forEach(item => {
        item.innerHTML = ArabQues[i];
        item.classList.toggle("FrenchQues");
        item.classList.toggle("ArabQues");
        i++;
    })
    i=0;
    arabicFeed.forEach(item => {
        item.innerHTML = ArabFeed[i];
        item.classList.toggle("FrenchFeed");
        item.classList.toggle("ArabFeed");
        i++;
    })
    i=0;
    arabicFeedValue.forEach(item => {
        item.setAttribute('placeholder',ArabicFeedValue[i]); 
        item.classList.toggle("FrenchFeedValue");
        item.classList.toggle("ArabicFeedValue");
        i++;
    })

    submit.value = "إرسال";

    }else{
        frenchMenu.forEach(item => {
             item.innerHTML = FrenchMenu[i];
             item.classList.toggle("FrenchMenu");
             item.classList.toggle("ArabMenu");
             i++;
        })
        i = 0;
        french1.forEach(item => {
            item.innerHTML = French1[i];
            item.classList.toggle("Arab1");
            item.classList.toggle("French1");
            i++;
        })
        i=0;
        french2.forEach(item => {
            item.innerHTML = French2[i];
            item.classList.toggle("French2");
            item.classList.toggle("Arab2");
            i++;
        })
        i=0;
        french22.forEach(item => {
            item.innerHTML = French22[i];
            item.classList.toggle("French22");
            item.classList.toggle("Arab22");
            i++;
        })
        i=0;
        french3.forEach(item => {
            item.innerHTML = French3[i];
            item.classList.toggle("French3");
            item.classList.toggle("Arab3");
            i++;
        })
        i=0;
        frenchQues.forEach(item => {
            item.innerHTML = FrenchQues[i];
            item.classList.toggle("FrenchQues");
            item.classList.toggle("ArabQues");
            i++;
        })
        i=0;
        frenchFeed.forEach(item => {
            item.innerHTML = FrenchFeed[i];
            item.classList.toggle("FrenchFeed");
            item.classList.toggle("ArabFeed");
            i++;
        })
        i=0;
        frenchFeedValue.forEach(item => {
            item.setAttribute('placeholder',FrenchFeedValue[i]); 
            item.classList.toggle("FrenchFeedValue");
            item.classList.toggle("ArabicFeedValue");
            i++;
        })

        submit.value = "Envoyer";

  }


        left.classList.toggle("threeLeftFr");
        left.classList.toggle("threeH1LeftArb");

        left2.classList.toggle("threeH3LeftArb");
        left2.classList.toggle("threeLeftFr");

        right.classList.toggle("threeRightArb");
        right.classList.toggle("threeH1RightFr");

        right2.classList.toggle("threeRightArb");
        right2.classList.toggle("threeH3RightFr");
    
        quest.forEach(item => {
            item.classList.toggle("rtl");
            item.classList.toggle("ltr");
        })


}
