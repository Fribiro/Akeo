function myFunc(x, n) {
            if (n == 1) {
                return x;
            } else {
                return x * myFunc(3, n - 1)
            }
        }
        console.log(myFunc(3,2));