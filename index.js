window.onload = () => {
    function getAge() {
        const birthYear = 1987;
        const birthMonth = 7;
        const birthDay = 13;
    
        const currentYear = new Date().getFullYear();
        const currentMonth = new Date().getMonth() + 1;
        const currentDay = new Date().getDate();
        
        
        if (currentMonth > birthMonth || (currentMonth == birthMonth && currentDay >= birthDay)) {
            const currentAge = currentYear - birthYear;
            return currentAge;
        };
        
        const currentAge = currentYear - birthYear - 1;
        return currentAge;
    }
    
    const avatarAge = getAge();
    const currentYear = new Date().getFullYear();

    document.getElementById('avatar-age').innerHTML = `Age: ${avatarAge}`;
    document.getElementById('footer').innerHTML = `brenoferreiralima.github.io / ${currentYear}`;
};