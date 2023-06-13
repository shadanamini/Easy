const shuffle = (nums, n) => {
    let answer = [];
    for (let i = 0; i < n; i++) {
        answer.push(nums[i], nums[i + n]);
    }
    return answer;
};