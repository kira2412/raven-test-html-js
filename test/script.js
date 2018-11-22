window.onload = function () {
    document.getElementsByClassName("reloader")[0].onclick = function () {
        window.location.reload();
    }

    var questions = [
        { question: "img/0.0/0.0.svg", answerOne: "img/0.0/0.1.svg", answerTwo: "img/0.0/0.2.svg", answerThree: "img/0.0/0.3.svg", answerFour: "img/0.0/0.4.svg", answerFive: "img/0.0/0.5.svg", answerSix: "img/0.0/0.6.svg", true: "answerFour", seria: "A" },
        { question: "img/1.0/0.0.svg", answerOne: "img/1.0/0.1.svg", answerTwo: "img/1.0/0.2.svg", answerThree: "img/1.0/0.3.svg", answerFour: "img/1.0/0.4.svg", answerFive: "img/1.0/0.5.svg", answerSix: "img/1.0/0.6.svg", true: "answerFive", seria: "A" },
        { question: "img/2.0/0.0.svg", answerOne: "img/2.0/0.1.svg", answerTwo: "img/2.0/0.2.svg", answerThree: "img/2.0/0.3.svg", answerFour: "img/2.0/0.4.svg", answerFive: "img/2.0/0.5.svg", answerSix: "img/2.0/0.6.svg", true: "answerOne", seria: "A" },
        { question: "img/3.0/0.0.svg", answerOne: "img/3.0/0.1.svg", answerTwo: "img/3.0/0.2.svg", answerThree: "img/3.0/0.3.svg", answerFour: "img/3.0/0.4.svg", answerFive: "img/3.0/0.5.svg", answerSix: "img/3.0/0.6.svg", true: "answerTwo", seria: "A" },
        { question: "img/4.0/0.0.svg", answerOne: "img/4.0/0.1.svg", answerTwo: "img/4.0/0.2.svg", answerThree: "img/4.0/0.3.svg", answerFour: "img/4.0/0.4.svg", answerFive: "img/4.0/0.5.svg", answerSix: "img/4.0/0.6.svg", true: "answerSix", seria: "A" },
        { question: "img/5.0/0.0.svg", answerOne: "img/5.0/0.1.svg", answerTwo: "img/5.0/0.2.svg", answerThree: "img/5.0/0.3.svg", answerFour: "img/5.0/0.4.svg", answerFive: "img/5.0/0.5.svg", answerSix: "img/5.0/0.6.svg", true: "answerThree", seria: "A" },
        { question: "img/6.0/0.0.svg", answerOne: "img/6.0/0.1.svg", answerTwo: "img/6.0/0.2.svg", answerThree: "img/6.0/0.3.svg", answerFour: "img/6.0/0.4.svg", answerFive: "img/6.0/0.5.svg", answerSix: "img/6.0/0.6.svg", true: "answerSix", seria: "A" },
        { question: "img/7.0/0.0.svg", answerOne: "img/7.0/0.1.svg", answerTwo: "img/7.0/0.2.svg", answerThree: "img/7.0/0.3.svg", answerFour: "img/7.0/0.4.svg", answerFive: "img/7.0/0.5.svg", answerSix: "img/7.0/0.6.svg", true: "answerTwo", seria: "A" },
        { question: "img/8.0/0.0.svg", answerOne: "img/8.0/0.1.svg", answerTwo: "img/8.0/0.2.svg", answerThree: "img/8.0/0.3.svg", answerFour: "img/8.0/0.4.svg", answerFive: "img/8.0/0.5.svg", answerSix: "img/8.0/0.6.svg", true: "answerOne", seria: "A" },
        { question: "img/9.0/0.0.svg", answerOne: "img/9.0/0.1.svg", answerTwo: "img/9.0/0.2.svg", answerThree: "img/9.0/0.3.svg", answerFour: "img/9.0/0.4.svg", answerFive: "img/9.0/0.5.svg", answerSix: "img/9.0/0.6.svg", true: "answerThree", seria: "A" },
        { question: "img/10.0/0.0.svg", answerOne: "img/10.0/0.1.svg", answerTwo: "img/10.0/0.2.svg", answerThree: "img/10.0/0.3.svg", answerFour: "img/10.0/0.4.svg", answerFive: "img/10.0/0.5.svg", answerSix: "img/10.0/0.6.svg", true: "answerFour", seria: "A" },
        { question: "img/11.0/0.0.svg", answerOne: "img/11.0/0.1.svg", answerTwo: "img/11.0/0.2.svg", answerThree: "img/11.0/0.3.svg", answerFour: "img/11.0/0.4.svg", answerFive: "img/11.0/0.5.svg", answerSix: "img/11.0/0.6.svg", true: "answerFive", seria: "A" },
        { question: "img/12.0/0.0.svg", answerOne: "img/12.0/0.1.svg", answerTwo: "img/12.0/0.2.svg", answerThree: "img/12.0/0.3.svg", answerFour: "img/12.0/0.4.svg", answerFive: "img/12.0/0.5.svg", answerSix: "img/12.0/0.6.svg", true: "answerTwo", seria: "B" },
        { question: "img/13.0/0.0.svg", answerOne: "img/13.0/0.1.svg", answerTwo: "img/13.0/0.2.svg", answerThree: "img/13.0/0.3.svg", answerFour: "img/13.0/0.4.svg", answerFive: "img/13.0/0.5.svg", answerSix: "img/13.0/0.6.svg", true: "answerSix", seria: "B" },
        { question: "img/14.0/0.0.svg", answerOne: "img/14.0/0.1.svg", answerTwo: "img/14.0/0.2.svg", answerThree: "img/14.0/0.3.svg", answerFour: "img/14.0/0.4.svg", answerFive: "img/14.0/0.5.svg", answerSix: "img/14.0/0.6.svg", true: "answerOne", seria: "B" },
        { question: "img/15.0/0.0.svg", answerOne: "img/14.0/0.1.svg", answerTwo: "img/15.0/0.2.svg", answerThree: "img/15.0/0.3.svg", answerFour: "img/15.0/0.4.svg", answerFive: "img/15.0/0.5.svg", answerSix: "img/15.0/0.6.svg", true: "answerTwo", seria: "B" },
        { question: "img/16.0/0.0.svg", answerOne: "img/16.0/0.1.svg", answerTwo: "img/16.0/0.2.svg", answerThree: "img/16.0/0.3.svg", answerFour: "img/16.0/0.4.svg", answerFive: "img/16.0/0.5.svg", answerSix: "img/16.0/0.6.svg", true: "answerOne", seria: "B" },
        { question: "img/17.0/0.0.svg", answerOne: "img/17.0/0.1.svg", answerTwo: "img/17.0/0.2.svg", answerThree: "img/17.0/0.3.svg", answerFour: "img/17.0/0.4.svg", answerFive: "img/17.0/0.5.svg", answerSix: "img/17.0/0.6.svg", true: "answerThree", seria: "B" },
        { question: "img/18.0/0.0.svg", answerOne: "img/18.0/0.1.svg", answerTwo: "img/18.0/0.2.svg", answerThree: "img/18.0/0.3.svg", answerFour: "img/18.0/0.4.svg", answerFive: "img/18.0/0.5.svg", answerSix: "img/18.0/0.6.svg", true: "answerFive", seria: "B" },
        { question: "img/19.0/0.0.svg", answerOne: "img/19.0/0.1.svg", answerTwo: "img/19.0/0.2.svg", answerThree: "img/19.0/0.3.svg", answerFour: "img/19.0/0.4.svg", answerFive: "img/19.0/0.5.svg", answerSix: "img/19.0/0.6.svg", true: "answerSix", seria: "B" },
        { question: "img/20.0/0.0.svg", answerOne: "img/20.0/0.1.svg", answerTwo: "img/20.0/0.2.svg", answerThree: "img/20.0/0.3.svg", answerFour: "img/20.0/0.4.svg", answerFive: "img/20.0/0.5.svg", answerSix: "img/20.0/0.6.svg", true: "answerFour", seria: "B" },
        { question: "img/21.0/0.0.svg", answerOne: "img/21.0/0.1.svg", answerTwo: "img/21.0/0.2.svg", answerThree: "img/21.0/0.3.svg", answerFour: "img/21.0/0.4.svg", answerFive: "img/21.0/0.5.svg", answerSix: "img/21.0/0.6.svg", true: "answerThree", seria: "B" },
        { question: "img/22.0/0.0.svg", answerOne: "img/22.0/0.1.svg", answerTwo: "img/22.0/0.2.svg", answerThree: "img/22.0/0.3.svg", answerFour: "img/22.0/0.4.svg", answerFive: "img/22.0/0.5.svg", answerSix: "img/22.0/0.6.svg", true: "answerFour", seria: "B" },
        { question: "img/23.0/0.0.svg", answerOne: "img/23.0/0.1.svg", answerTwo: "img/23.0/0.2.svg", answerThree: "img/23.0/0.3.svg", answerFour: "img/23.0/0.4.svg", answerFive: "img/23.0/0.5.svg", answerSix: "img/23.0/0.6.svg", true: "answerFive", seria: "B" },
        { question: "img/24.0/0.0.svg", answerOne: "img/24.0/0.1.svg", answerTwo: "img/24.0/0.2.svg", answerThree: "img/24.0/0.3.svg", answerFour: "img/24.0/0.4.svg", answerFive: "img/24.0/0.5.svg", answerSix: "img/24.0/0.7.svg", answerSeven: "img/24.0/0.7.svg", answerEight: "img/24.0/0.8.svg", true: "answerEight", seria: "C" },
        { question: "img/25.0/0.0.svg", answerOne: "img/25.0/0.1.svg", answerTwo: "img/25.0/0.2.svg", answerThree: "img/25.0/0.3.svg", answerFour: "img/25.0/0.4.svg", answerFive: "img/25.0/0.5.svg", answerSix: "img/25.0/0.6.svg", answerSeven: "img/25.0/0.7.svg", answerEight: "img/25.0/0.8.svg", true: "answerTwo", seria: "C" },
        { question: "img/26.0/0.0.svg", answerOne: "img/26.0/0.1.svg", answerTwo: "img/26.0/0.2.svg", answerThree: "img/26.0/0.3.svg", answerFour: "img/26.0/0.4.svg", answerFive: "img/26.0/0.5.svg", answerSix: "img/26.0/0.6.svg", answerSeven: "img/26.0/0.7.svg", answerEight: "img/26.0/0.8.svg", true: "answerThree", seria: "C" },
        { question: "img/27.0/0.0.svg", answerOne: "img/27.0/0.1.svg", answerTwo: "img/27.0/0.2.svg", answerThree: "img/27.0/0.3.svg", answerFour: "img/27.0/0.4.svg", answerFive: "img/27.0/0.5.svg", answerSix: "img/27.0/0.6.svg", answerSeven: "img/27.0/0.7.svg", answerEight: "img/27.0/0.8.svg", true: "answerEight", seria: "C" },
        { question: "img/28.0/0.0.svg", answerOne: "img/28.0/0.1.svg", answerTwo: "img/28.0/0.2.svg", answerThree: "img/28.0/0.3.svg", answerFour: "img/28.0/0.4.svg", answerFive: "img/28.0/0.5.svg", answerSix: "img/28.0/0.6.svg", answerSeven: "img/28.0/0.7.svg", answerEight: "img/28.0/0.8.svg", true: "answerSeven", seria: "C" },
        { question: "img/29.0/0.0.svg", answerOne: "img/29.0/0.1.svg", answerTwo: "img/29.0/0.2.svg", answerThree: "img/29.0/0.3.svg", answerFour: "img/29.0/0.4.svg", answerFive: "img/29.0/0.5.svg", answerSix: "img/29.0/0.6.svg", answerSeven: "img/29.0/0.7.svg", answerEight: "img/29.0/0.8.svg", true: "answerFour", seria: "C" },
        { question: "img/30.0/0.0.svg", answerOne: "img/30.0/0.1.svg", answerTwo: "img/30.0/0.2.svg", answerThree: "img/30.0/0.3.svg", answerFour: "img/30.0/0.4.svg", answerFive: "img/30.0/0.5.svg", answerSix: "img/30.0/0.6.svg", answerSeven: "img/30.0/0.7.svg", answerEight: "img/30.0/0.8.svg", true: "answerFive", seria: "C" },
        { question: "img/31.0/0.0.svg", answerOne: "img/31.0/0.1.svg", answerTwo: "img/31.0/0.2.svg", answerThree: "img/31.0/0.3.svg", answerFour: "img/31.0/0.4.svg", answerFive: "img/31.0/0.5.svg", answerSix: "img/31.0/0.6.svg", answerSeven: "img/31.0/0.7.svg", answerEight: "img/31.0/0.8.svg", true: "answerOne", seria: "C" },
        { question: "img/32.0/0.0.svg", answerOne: "img/32.0/0.1.svg", answerTwo: "img/32.0/0.2.svg", answerThree: "img/32.0/0.3.svg", answerFour: "img/32.0/0.4.svg", answerFive: "img/32.0/0.5.svg", answerSix: "img/32.0/0.6.svg", answerSeven: "img/32.0/0.7.svg", answerEight: "img/32.0/0.8.svg", true: "answerSeven", seria: "C" },
        { question: "img/33.0/0.0.svg", answerOne: "img/33.0/0.1.svg", answerTwo: "img/33.0/0.2.svg", answerThree: "img/33.0/0.3.svg", answerFour: "img/33.0/0.4.svg", answerFive: "img/33.0/0.5.svg", answerSix: "img/33.0/0.6.svg", answerSeven: "img/33.0/0.7.svg", answerEight: "img/33.0/0.8.svg", true: "answerSix", seria: "C" },
        { question: "img/34.0/0.0.svg", answerOne: "img/34.0/0.1.svg", answerTwo: "img/34.0/0.2.svg", answerThree: "img/34.0/0.3.svg", answerFour: "img/34.0/0.4.svg", answerFive: "img/34.0/0.5.svg", answerSix: "img/34.0/0.6.svg", answerSeven: "img/34.0/0.7.svg", answerEight: "img/34.0/0.8.svg", true: "answerOne", seria: "C" },
        { question: "img/35.0/0.0.svg", answerOne: "img/35.0/0.1.svg", answerTwo: "img/35.0/0.2.svg", answerThree: "img/35.0/0.3.svg", answerFour: "img/35.0/0.4.svg", answerFive: "img/35.0/0.5.svg", answerSix: "img/35.0/0.6.svg", answerSeven: "img/35.0/0.7.svg", answerEight: "img/35.0/0.8.svg", true: "answerTwo", seria: "C" },
        { question: "img/36.0/0.0.svg", answerOne: "img/36.0/0.1.svg", answerTwo: "img/36.0/0.2.svg", answerThree: "img/36.0/0.3.svg", answerFour: "img/36.0/0.4.svg", answerFive: "img/36.0/0.5.svg", answerSix: "img/36.0/0.6.svg", answerSeven: "img/36.0/0.7.svg", answerEight: "img/36.0/0.8.svg", true: "answerThree", seria: "D" },
        { question: "img/37.0/0.0.svg", answerOne: "img/37.0/0.1.svg", answerTwo: "img/37.0/0.2.svg", answerThree: "img/37.0/0.3.svg", answerFour: "img/37.0/0.4.svg", answerFive: "img/37.0/0.5.svg", answerSix: "img/37.0/0.6.svg", answerSeven: "img/37.0/0.7.svg", answerEight: "img/37.0/0.8.svg", true: "answerFour", seria: "D" },
        { question: "img/38.0/0.0.svg", answerOne: "img/38.0/0.1.svg", answerTwo: "img/38.0/0.2.svg", answerThree: "img/38.0/0.3.svg", answerFour: "img/38.0/0.4.svg", answerFive: "img/38.0/0.5.svg", answerSix: "img/38.0/0.6.svg", answerSeven: "img/38.0/0.7.svg", answerEight: "img/38.0/0.8.svg", true: "answerThree", seria: "D" },
        { question: "img/39.0/0.0.svg", answerOne: "img/39.0/0.1.svg", answerTwo: "img/39.0/0.2.svg", answerThree: "img/39.0/0.3.svg", answerFour: "img/39.0/0.4.svg", answerFive: "img/39.0/0.5.svg", answerSix: "img/39.0/0.6.svg", answerSeven: "img/39.0/0.7.svg", answerEight: "img/39.0/0.8.svg", true: "answerSeven", seria: "D" },
        { question: "img/40.0/0.0.svg", answerOne: "img/40.0/0.1.svg", answerTwo: "img/40.0/0.2.svg", answerThree: "img/40.0/0.3.svg", answerFour: "img/40.0/0.4.svg", answerFive: "img/40.0/0.5.svg", answerSix: "img/40.0/0.6.svg", answerSeven: "img/40.0/0.7.svg", answerEight: "img/40.0/0.8.svg", true: "answerEight", seria: "D" },
        { question: "img/41.0/0.0.svg", answerOne: "img/41.0/0.1.svg", answerTwo: "img/41.0/0.2.svg", answerThree: "img/41.0/0.3.svg", answerFour: "img/41.0/0.4.svg", answerFive: "img/41.0/0.5.svg", answerSix: "img/41.0/0.6.svg", answerSeven: "img/41.0/0.7.svg", answerEight: "img/41.0/0.8.svg", true: "answerSix", seria: "D" },
        { question: "img/42.0/0.0.svg", answerOne: "img/42.0/0.1.svg", answerTwo: "img/42.0/0.2.svg", answerThree: "img/42.0/0.3.svg", answerFour: "img/42.0/0.4.svg", answerFive: "img/42.0/0.5.svg", answerSix: "img/42.0/0.6.svg", answerSeven: "img/42.0/0.7.svg", answerEight: "img/42.0/0.8.svg", true: "answerFive", seria: "D" },
        { question: "img/43.0/0.0.svg", answerOne: "img/43.0/0.1.svg", answerTwo: "img/46.0/0.2.svg", answerThree: "img/43.0/0.3.svg", answerFour: "img/43.0/0.4.svg", answerFive: "img/43.0/0.5.svg", answerSix: "img/43.0/0.6.svg", answerSeven: "img/43.0/0.7.svg", answerEight: "img/43.0/0.8.svg", true: "answerFour", seria: "D" },
        { question: "img/44.0/0.0.svg", answerOne: "img/44.0/0.1.svg", answerTwo: "img/44.0/0.2.svg", answerThree: "img/44.0/0.3.svg", answerFour: "img/44.0/0.4.svg", answerFive: "img/44.0/0.5.svg", answerSix: "img/44.0/0.6.svg", answerSeven: "img/44.0/0.7.svg", answerEight: "img/44.0/0.8.svg", true: "answerOne", seria: "D" },
        { question: "img/45.0/0.0.svg", answerOne: "img/45.0/0.1.svg", answerTwo: "img/42.0/0.2.svg", answerThree: "img/42.0/0.3.svg", answerFour: "img/45.0/0.4.svg", answerFive: "img/45.0/0.5.svg", answerSix: "img/45.0/0.6.svg", answerSeven: "img/45.0/0.7.svg", answerEight: "img/45.0/0.8.svg", true: "answerTwo", seria: "D" },
        { question: "img/46.0/0.0.svg", answerOne: "img/46.0/0.1.svg", answerTwo: "img/46.0/0.2.svg", answerThree: "img/46.0/0.3.svg", answerFour: "img/46.0/0.4.svg", answerFive: "img/46.0/0.5.svg", answerSix: "img/46.0/0.6.svg", answerSeven: "img/46.0/0.7.svg", answerEight: "img/46.0/0.8.svg", true: "answerFive", seria: "D" },
        { question: "img/47.0/0.0.svg", answerOne: "img/47.0/0.1.svg", answerTwo: "img/47.0/0.2.svg", answerThree: "img/47.0/0.3.svg", answerFour: "img/47.0/0.4.svg", answerFive: "img/47.0/0.5.svg", answerSix: "img/47.0/0.6.svg", answerSeven: "img/47.0/0.7.svg", answerEight: "img/47.0/0.8.svg", true: "answerSix", seria: "D" },
        { question: "img/48.0/0.0.svg", answerOne: "img/48.0/0.1.svg", answerTwo: "img/48.0/0.2.svg", answerThree: "img/48.0/0.3.svg", answerFour: "img/48.0/0.4.svg", answerFive: "img/48.0/0.5.svg", answerSix: "img/48.0/0.6.svg", answerSeven: "img/48.0/0.7.svg", answerEight: "img/48.0/0.8.svg", true: "answerSeven", seria: "E" },
        { question: "img/49.0/0.0.svg", answerOne: "img/49.0/0.1.svg", answerTwo: "img/49.0/0.2.svg", answerThree: "img/49.0/0.3.svg", answerFour: "img/49.0/0.4.svg", answerFive: "img/49.0/0.5.svg", answerSix: "img/49.0/0.6.svg", answerSeven: "img/49.0/0.7.svg", answerEight: "img/49.0/0.8.svg", true: "answerSix", seria: "E" },
        { question: "img/50.0/0.0.svg", answerOne: "img/50.0/0.1.svg", answerTwo: "img/50.0/0.2.svg", answerThree: "img/50.0/0.3.svg", answerFour: "img/50.0/0.4.svg", answerFive: "img/50.0/0.5.svg", answerSix: "img/50.0/0.6.svg", answerSeven: "img/50.0/0.7.svg", answerEight: "img/50.0/0.8.svg", true: "answerEight", seria: "E" },
        { question: "img/51.0/0.0.svg", answerOne: "img/51.0/0.1.svg", answerTwo: "img/51.0/0.2.svg", answerThree: "img/51.0/0.3.svg", answerFour: "img/51.0/0.4.svg", answerFive: "img/51.0/0.5.svg", answerSix: "img/51.0/0.6.svg", answerSeven: "img/51.0/0.7.svg", answerEight: "img/51.0/0.8.svg", true: "answerTwo", seria: "E" },
        { question: "img/52.0/0.0.svg", answerOne: "img/52.0/0.1.svg", answerTwo: "img/52.0/0.2.svg", answerThree: "img/52.0/0.3.svg", answerFour: "img/52.0/0.4.svg", answerFive: "img/52.0/0.5.svg", answerSix: "img/52.0/0.6.svg", answerSeven: "img/52.0/0.7.svg", answerEight: "img/52.0/0.8.svg", true: "answerOne", seria: "E" },
        { question: "img/53.0/0.0.svg", answerOne: "img/53.0/0.1.svg", answerTwo: "img/53.0/0.2.svg", answerThree: "img/53.0/0.3.svg", answerFour: "img/53.0/0.4.svg", answerFive: "img/53.0/0.5.svg", answerSix: "img/53.0/0.6.svg", answerSeven: "img/53.0/0.7.svg", answerEight: "img/53.0/0.8.svg", true: "answerFive", seria: "E" },
        { question: "img/54.0/0.0.svg", answerOne: "img/54.0/0.1.svg", answerTwo: "img/54.0/0.2.svg", answerThree: "img/54.0/0.3.svg", answerFour: "img/54.0/0.4.svg", answerFive: "img/54.0/0.5.svg", answerSix: "img/54.0/0.6.svg", answerSeven: "img/54.0/0.7.svg", answerEight: "img/54.0/0.8.svg", true: "answerOne", seria: "E" },
        { question: "img/55.0/0.0.svg", answerOne: "img/55.0/0.1.svg", answerTwo: "img/55.0/0.2.svg", answerThree: "img/55.0/0.3.svg", answerFour: "img/55.0/0.4.svg", answerFive: "img/55.0/0.5.svg", answerSix: "img/55.0/0.6.svg", answerSeven: "img/55.0/0.7.svg", answerEight: "img/55.0/0.8.svg", true: "answerSix", seria: "E" },
        { question: "img/56.0/0.0.svg", answerOne: "img/56.0/0.1.svg", answerTwo: "img/56.0/0.2.svg", answerThree: "img/56.0/0.3.svg", answerFour: "img/56.0/0.4.svg", answerFive: "img/56.0/0.5.svg", answerSix: "img/56.0/0.6.svg", answerSeven: "img/56.0/0.7.svg", answerEight: "img/56.0/0.8.svg", true: "answerThree", seria: "E" },
        { question: "img/57.0/0.0.svg", answerOne: "img/57.0/0.1.svg", answerTwo: "img/57.0/0.2.svg", answerThree: "img/57.0/0.3.svg", answerFour: "img/57.0/0.4.svg", answerFive: "img/57.0/0.5.svg", answerSix: "img/57.0/0.6.svg", answerSeven: "img/57.0/0.7.svg", answerEight: "img/57.0/0.8.svg", true: "answerTwo", seria: "E" },
        { question: "img/58.0/0.0.svg", answerOne: "img/58.0/0.1.svg", answerTwo: "img/58.0/0.2.svg", answerThree: "img/58.0/0.3.svg", answerFour: "img/58.0/0.4.svg", answerFive: "img/58.0/0.5.svg", answerSix: "img/58.0/0.6.svg", answerSeven: "img/58.0/0.7.svg", answerEight: "img/58.0/0.8.svg", true: "answerFour", seria: "E" },
        { question: "img/59.0/0.0.svg", answerOne: "img/59.0/0.1.svg", answerTwo: "img/59.0/0.2.svg", answerThree: "img/59.0/0.3.svg", answerFour: "img/59.0/0.4.svg", answerFive: "img/59.0/0.5.svg", answerSix: "img/59.0/0.6.svg", answerSeven: "img/59.0/0.7.svg", answerEight: "img/59.0/0.8.svg", true: "answerFive", seria: "E" }
    ];


    document.getElementById("start").onclick = function () {
        document.getElementsByClassName("start")[0].className = "none";
        document.getElementsByClassName("registrationCard")[0].className = "start";
    }
    document.getElementById("startTest").onclick = function () {
        var age = parseInt(document.getElementById("userAge").value);

        if (userName.value == '' || userAge.value == '') { return };
        document.getElementsByClassName("board")[0].className = "progresBoard";

        document.getElementsByClassName("start")[0].className = "none";
        startTest();
    }


    function progres() {
        var a = 1;
        document.getElementsByClassName("progres")[0].innerHTML = a + "/" + questions.length;
    }

    var counterA = 0;
    var counterB = 0;
    var counterC = 0;
    var counterD = 0;
    var counterE = 0;

    function quest() {
        var a = 0;
        document.getElementById("question").src = questions[a].question;
        document.getElementById("answerOne").src = questions[a].answerOne;
        document.getElementById("answerTwo").src = questions[a].answerTwo;
        document.getElementById("answerThree").src = questions[a].answerThree;
        document.getElementById("answerFour").src = questions[a].answerFour;
        document.getElementById("answerFive").src = questions[a].answerFive;
        document.getElementById("answerSix").src = questions[a].answerSix;

        var buttons = document.getElementsByClassName("startstart");

        for (i = 0; i <= buttons.length; i++) {
            buttons[i].onclick = function (e) {
                var elm = e.target;

                if (questions[a].true == elm.id) {
                    if (questions[a].seria == "A") {
                        counterA++;
                    } else if (questions[a].seria == "B") {
                        counterB++;
                    } else if (questions[a].seria == "C") {
                        counterC++;
                    } else if (questions[a].seria == "D") {
                        counterD++;
                    } else if (questions[a].seria == "E") {
                        counterE++;
                    }
                }

                a++;
                numberquestion = a + 1;
                document.getElementsByClassName("progres")[0].innerHTML = numberquestion + "/" + questions.length;

                if (questions.length == numberquestion) {
                    document.getElementsByClassName("gamegame")[0].className = "none";
                    document.getElementsByClassName("result")[0].className = "output";
                    iq();
                    document.getElementsByClassName("ageValue")[0].innerHTML = userAge.value;
                    document.getElementsByClassName("iqValue")[0].innerHTML = iqResult;
                    document.getElementsByClassName("timerEnd")[0].innerHTML = time;
                    document.getElementsByClassName("diapazon")[0].innerHTML = "Ваш IQ в діапазоні" + diapazon;
                    document.getElementsByClassName("resres")[0].innerHTML = "Це є показником" + resres;
                } else {
                    document.getElementById("question").src = questions[a].question;
                    document.getElementById("answerOne").src = questions[a].answerOne;
                    document.getElementById("answerTwo").src = questions[a].answerTwo;
                    document.getElementById("answerThree").src = questions[a].answerThree;
                    document.getElementById("answerFour").src = questions[a].answerFour;
                    document.getElementById("answerFive").src = questions[a].answerFive;
                    document.getElementById("answerSix").src = questions[a].answerSix;
                    if (questions[a].answerSeven) {
                        document.getElementById("answerSeven").src = questions[a].answerSeven;
                        document.getElementById("answerEight").src = questions[a].answerEight;
                    }
                }

            }
        }
    }


    function iq() {
        sum = counterA + counterB + counterC + counterD + counterE;
        if (sum <= 15) {
            iq = 62;
        } else if (sum == 16) {
            iq = 65;
        } else if (sum == 16) {
            iq = 65;
        } else if (sum == 17) {
            iq = 65;
        } else if (sum == 18) {
            iq = 66;
        } else if (sum == 19) {
            iq = 67;
        } else if (sum == 20) {
            iq = 69;
        } else if (sum == 21) {
            iq = 70;
        } else if (sum == 22) {
            iq = 71;
        } else if (sum == 23) {
            iq = 72;
        } else if (sum == 24) {
            iq = 73;
        } else if (sum == 25) {
            iq = 75;
        } else if (sum == 26) {
            iq = 76;
        } else if (sum == 27) {
            iq = 77;
        } else if (sum == 28) {
            iq = 79;
        } else if (sum == 29) {
            iq = 80;
        } else if (sum == 30) {
            iq = 82;
        } else if (sum == 31) {
            iq = 83;
        } else if (sum == 32) {
            iq = 84;
        } else if (sum == 33) {
            iq = 86;
        } else if (sum == 34) {
            iq = 87;
        } else if (sum == 35) {
            iq = 88;
        } else if (sum == 36) {
            iq = 90;
        } else if (sum == 37) {
            iq = 91;
        } else if (sum == 38) {
            iq = 92;
        } else if (sum == 39) {
            iq = 94;
        } else if (sum == 40) {
            iq = 95;
        } else if (sum == 41) {
            iq = 96;
        } else if (sum == 42) {
            iq = 98;
        } else if (sum == 43) {
            iq = 99;
        } else if (sum == 44) {
            iq = 100;
        } else if (sum == 45) {
            iq = 102;
        } else if (sum == 46) {
            iq = 104;
        } else if (sum == 47) {
            iq = 106;
        } else if (sum == 48) {
            iq = 108;
        } else if (sum == 49) {
            iq = 110;
        } else if (sum == 50) {
            iq = 112;
        } else if (sum == 51) {
            iq = 114;
        } else if (sum == 52) {
            iq = 116;
        } else if (sum == 53) {
            iq = 118;
        } else if (sum == 54) {
            iq = 120;
        } else if (sum == 55) {
            iq = 122;
        } else if (sum == 56) {
            iq = 124;
        } else if (sum == 57) {
            iq = 126;
        } else if (sum == 58) {
            iq = 128;
        } else if (sum == 59) {
            iq = 130;
        } else if (sum == 60) {
            iq = 140;
        };

        ageUser = parseInt(userAge.value);

        if (ageUser > 13 && ageUser <= 30) {
            ageProcent = 100;
        } else if (ageUser > 30 && ageUser <= 35) {
            ageProcent = 97;
        } else if (ageUser > 35 && ageUser <= 40) {
            ageProcent = 93;
        } else if (ageUser > 40 && ageUser <= 45) {
            ageProcent = 88;
        } else if (ageUser > 45 && ageUser <= 50) {
            ageProcent = 82;
        } else if (ageUser > 50 && ageUser <= 55) {
            ageProcent = 76;
        } else if (ageUser > 56 && ageUser <= 60) {
            ageProcent = 70;
        }

        iqResult = iq / ageProcent * 100;
        if (iqResult<20){
            resres = " важка степінь слабоумства";
            diapazon = " від 0 до 20";
        } else if (iqResult>20 && iqResult<51) {
           resres = " середня степінь слабоумства";
           diapazon = " від 20 до 50";
        } else if (iqResult>50&& iqResult<71){
            resres = " легка степінь слабоумства";
            diapazon = " від 50 до 70";
        } else if (iqResult>70&& iqResult<81){
            resres = " низкий рівень інтелекту";
            diapazon = " від 70 до 80";
        } else if (iqResult>80&& iqResult<91){
            resres = " інтелект нижще середнього";
            diapazon = " від 80 до 90";
        } else if (iqResult>90&& iqResult<111){
            resres = " средній рівень інтелекту";
            diapazon = " від 90 до 110";
        } else if (iqResult>110&& iqResult<121){
            resres = " інтелект вище среднего";
            diapazon = " від 110 до 120";
        } else if (iqResult>120&& iqResult<141){
            resres = " високий рівень інтелекту";
            diapazon = " від 120 до 140";
        } else if (iqResult>140){
            resres = " незаурядний, видатний інтелект";
            diapazon = " більше 140";
        }


    }

    function timer() {
        var h = 0;
        var m = 29;
        var s = 60;
        setInterval(function () {
            s--;
            if (s == 0) {
                s = 60;
                m--;
                if (m == 0) {
                    timeEnd()
                }
            }
            time = h + ":" + m + ":" + s;
            document.getElementsByClassName("timeTick")[0].innerHTML = h + ":" + m + ":" + s;
        }, 1000)

    };

    function timeEnd() {
        document.getElementsByClassName("gamegame")[0].className = "none";
        document.getElementsByClassName("result")[0].className = "output";
        iq();
        document.getElementsByClassName("ageValue")[0].innerHTML = userAge.value;
        document.getElementsByClassName("iqValue")[0].innerHTML = iqResult;
        document.getElementsByClassName("timerEnd")[0].innerHTML = time;
        document.getElementsByClassName("diapazon")[0].innerHTML = "Ваш IQ в діапазоні" + diapazon;
        document.getElementsByClassName("resres")[0].innerHTML = "Це є показником" + resres;
    }



    function startTest() {
        progres();
        timer();
        quest();
    }

}

