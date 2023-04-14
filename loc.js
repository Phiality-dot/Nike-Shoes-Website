$(".btn").click(function (e) { 
    var location = this.id;
    var coords;
    switch (location) {
      case "macquarie":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13265.273778555362!2d151.1225969!3d-33.7782739!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a60daafafe95%3A0x4ab425901adb5d97!2sNike%20Macquarie%20Centre!5e0!3m2!1sen!2sau!4v1681402802765!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "sydney":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.7631218246174!2d151.20590857658632!3d-33.86999511912231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3fb22b805d%3A0x9fdc86620a5027f4!2sNike%20Sydney%20Pitt%20Street!5e0!3m2!1sen!2sau!4v1681403065517!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "parramatta":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7797214288016!2d150.9996401765843!3d-33.81799721643096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a320425adf49%3A0xc53e8e1ade0564d4!2sNike%20Parramatta!5e0!3m2!1sen!2sau!4v1681402991257!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "kyrie":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.4502593327265!2d150.9092749765884!3d-33.929545722209326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1295ac14cbffff%3A0x9417ff6cc8f2fce3!2sNike%20Kyrie%205!5e0!3m2!1sen!2sau!4v1681403096254!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "burwood":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5842035970563!2d151.1028195765864!3d-33.87460511936105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12bac5334d82b7%3A0xbb663cb6539e37dc!2sNike%20Burwood!5e0!3m2!1sen!2sau!4v1681403124282!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "bondi":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.896371980986!2d151.24789847658727!3d-33.892322620279046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae07021dcdfb%3A0x102ec65843486aac!2sNike%20Bondi!5e0!3m2!1sen!2sau!4v1681403144093!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "eastgardens":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3309.8649932006065!2d151.2212267765892!3d-33.94460032299041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12b165364d4e41%3A0xca79427b100eb45a!2sNike%20Eastgardens!5e0!3m2!1sen!2sau!4v1681403172226!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      case "neutralbay":
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.24958721213!2d151.2207263765849!3d-33.831673517138256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac052697963b%3A0x89a971f306d70d88!2sNike%20Neutral%20Bay!5e0!3m2!1sen!2sau!4v1681403195604!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
        break;
      default:
        $(".map-container").html(`<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.24958721213!2d151.2207263765849!3d-33.831673517138256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ac052697963b%3A0x89a971f306d70d88!2sNike%20Neutral%20Bay!5e0!3m2!1sen!2sau!4v1681403195604!5m2!1sen!2sau" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)
    }
});