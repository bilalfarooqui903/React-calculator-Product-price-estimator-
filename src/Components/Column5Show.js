//if (props.status.platfType == 'local' && ((props.status.weight > 0 && props.status.weight < 1000) && props.status.weightTyp == 'mg')) { shipfees = 44; }
//else if (props.status.platfType == 'local' && (props.status.weight == 1000 && props.status.weightTyp == 'mg')) { shipfees = 57; }
//else if (props.status.platfType == 'local' && (props.status.weight < 1 && props.status.weigthTyp == 'kg')) { shipfees = 57; }
//else if (props.status.platfType == 'local' && (props.status.weight = 1 && props.status.weightTyp == 'kg')) { shipfees = 57; }
//else if (props.status.platfType == 'local' && (props.status.weight > 1 && props.status.weightTyp == 'kg')) { let part1 = props.status.weight - 1; shipfees = 57 + (part1 * 21); }
// else if (props.status.paltfType == 'local' && (props.status.weight > 5000 && props.status.weightTyp == 'mg')) {
//else if (((1000 * volum_weight) <= Number(props.status.weight)) && props.status.weightTyp == 'mg') { weight_select = props.status.weight; }
//let part1 = weight_select - 4000;
//if ((part1 / 1000) >= 1) {
//    if (Number.isInteger(part1 / 1000)) { shipfees = 105 + (part1 / 1000) * 12; }
//    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let value = Math.floor((part1 / 1000)); shipfees = 105 + (value * 12) + 44; }
//}
//if (props.status.platfType == 'local' && (props.status.weight > 0 && props.status.weight < 1)) { shipfees = 44; }
//else if (props.status.platfType == 'local' && props.status.weight == 1) { shipfees = 57; }
//else if (props.status.platfType == 'local' && (weight_select > 1 && weight_select <= 5)) {
//    let part1 = weight_select - 1;
//    if ((part1 / 1) < 1) { shipfees = 57; }
//    else if ((part1 / 1) >= 1) { let value = Math.floor((part1 / 1)); shipfees = 57 + (value * 21); }
//}
//else if (props.status.platfType == 'local' && props.status.weight > 5) {
//    let part1 = props.status.weight - 5;
//    if ((part1 / 1) < 1) { shipfees = 141; }
//    else if ((part1 / 1) >= 1) { let value = Math.floor((part1 / 1)); shipfees = 141 + (value * 12); }
//}
//else if (props.status.platfType == 'regional' && (props.status.weight > 0 && props.status.weight < 1)) { shipfees = 53; }
//else if (props.status.platfType == 'regional' && props.status.weight == 1) { shipfees = 70; }
//else if (props.status.platfType == 'regional' && (props.status.weight > 1 && props.status.weight <= 5)) {
//    let part1 = props.status.weight - 1;
//    if ((part1 / 1) < 1) { shipfees = 70; }
//    else if ((part1 / 1) >= 1) { let value = Math.floor((part1 / 1)); shipfees = 70 + (value * 27); }
//}
//else if (props.status.platfType == 'regional' && props.status.weight > 5) {
//    let part1 = props.status.weight - 5;
//    if ((part1 / 1) < 1) { shipfees = 178; }
//    else if ((part1 / 1) >= 1) { let value = Math.floor((part1 / 1)); shipfees = 178 + (value * 13); }
//}
//else if (props.status.platfType == 'national' && (props.status.weight > 0 && props.status.weight < 1)) { shipfees = 74; }
//else if (props.status.platfType == 'national' && props.status.weight == 1) { shipfees = 99; }
//else if (props.status.platfType == 'national' && (props.status.weight > 1 && props.status.weight <= 5)) {
//    let part1 = props.status.weight - 1;
//    if ((part1 / 1) < 1) { shipfees = 99; }
//    else if ((part1 / 1) >= 1) { let value = Math.floor((part1 / 1)); shipfees = 99 + (value * 33); }
//}
//else if (props.status.platfType == 'national' && props.status.weight > 5) {
//    let part1 = props.status.weight - 5;
//    if ((part1 / 1) < 1) { shipfees = 231; }
//    else if ((part1 / 1) >= 1) { let value = Math.floor((part1 / 1)); shipfees = 231 + (value * 16); }
//}


function Column5Show(props) {

    let coln5 = props.passed;
    let shipfees = 0;
    let volum_weight = (props.status.length * props.status.breadth * props.status.height) / 5000;
    let weight_select;

    if (props.status.weightTyp == 'kg') {
        if (volum_weight > Number(props.status.weight)) { weight_select = volum_weight; }
        else if (volum_weight <= Number(props.status.weight)) { weight_select = props.status.weight; }
    }
    else if (props.status.weightTyp == 'gm') {
        if ((1000 * volum_weight) > Number(props.status.weight)) { weight_select = 1000 * volum_weight; }
        else if ((1000 * volum_weight) <= Number(props.status.weight)) { weight_select = props.status.weight; }
    }



    if (props.statevarb.platform == 'amazon') {
        if (props.status.weightTyp == 'gm') {
            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 500)) { shipfees = 44; }
            else if (props.status.platfType == 'local' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 57; }
            else if (props.status.platfType == 'local' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 57 + ((part1 / 1000) - 1) * 21; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 57 + (part2 * 21) + 21; }
                }
            }
            else if (props.status.platfType == 'local' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 141 + ((part1 / 1000) - 5) * 12; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 141 + (part2 * 12) + 12; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 500)) { shipfees = 53; }
            else if (props.status.platfType == 'regional' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 70; }
            else if (props.status.platfType == 'regional' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 70 + ((part1 / 1000) - 1) * 27; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 70 + (part2 * 27) + 27; }
                }
            }
            else if (props.status.platfType == 'regional' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 178 + ((part1 / 1000) - 5) * 13; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 178 + (part2 * 13) + 13; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 500)) { shipfees = 74; }
            else if (props.status.platfType == 'national' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 99; }
            else if (props.status.platfType == 'national' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 99 + ((part1 / 1000) - 1) * 33; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 99 + (part2 * 33) + 33; }
                }
            }
            else if (props.status.platfType == 'national' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 231 + ((part1 / 1000) - 5) * 16; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 231 + (part2 * 16) + 16; }
                }
            }
        }

        if (props.status.weightTyp == 'kg') {

            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 44; }
            else if (props.status.platfType == 'local' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 57; }
            else if (props.status.platfType == 'local' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 57 + ((part1 / 1) - 1) * 21; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 57 + (part2 * 21) + 21; }
                }
            }
            else if (props.status.platfType == 'local' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 141 + ((part1 / 1) - 5) * 12; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 141 + (part2 * 12) + 12; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 53; }
            else if (props.status.platfType == 'regional' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 70; }
            else if (props.status.platfType == 'regional' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 70 + ((part1 / 1) - 1) * 27; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 70 + (part2 * 27) + 27; }
                }
            }
            else if (props.status.platfType == 'regional' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 178 + ((part1 / 1) - 5) * 13; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 178 + (part2 * 13) + 13; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 74; }
            else if (props.status.platfType == 'national' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 99; }
            else if (props.status.platfType == 'national' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 99 + ((part1 / 1) - 1) * 33; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 99 + (part2 * 33) + 33; }
                }
            }
            else if (props.status.platfType == 'national' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 231 + ((part1 / 1) - 5) * 16; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 231 + (part2 * 16) + 16; }
                }
            }
        }
    }
    else if (props.statevarb.platform == 'amazonfba') {
        if (props.status.weightTyp == 'gm') {
            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 500)) { shipfees = 31; }
            else if (props.status.platfType == 'local' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 44; }
            else if (props.status.platfType == 'local' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 44 + ((part1 / 1000) - 1) * 21; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 44 + (part2 * 21) + 21; }
                }
            }
            else if (props.status.platfType == 'local' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 128 + ((part1 / 1000) - 5) * 12; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 128 + (part2 * 12) + 12; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 500)) { shipfees = 40; }
            else if (props.status.platfType == 'regional' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 57; }
            else if (props.status.platfType == 'regional' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 57 + ((part1 / 1000) - 1) * 27; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 57 + (part2 * 27) + 27; }
                }
            }
            else if (props.status.platfType == 'regional' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 165 + ((part1 / 1000) - 5) * 13; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 165 + (part2 * 13) + 13; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 500)) { shipfees = 61; }
            else if (props.status.platfType == 'national' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 86; }
            else if (props.status.platfType == 'national' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 86 + ((part1 / 1000) - 1) * 33; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 86 + (part2 * 33) + 33; }
                }
            }
            else if (props.status.platfType == 'national' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 218 + ((part1 / 1000) - 5) * 16; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 218 + (part2 * 16) + 16; }
                }
            }
        }

        if (props.status.weightTyp == 'kg') {

            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 31; }
            else if (props.status.platfType == 'local' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 44; }
            else if (props.status.platfType == 'local' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 44 + ((part1 / 1) - 1) * 21; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 44 + (part2 * 21) + 21; }
                }
            }
            else if (props.status.platfType == 'local' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 128 + ((part1 / 1) - 5) * 12; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 128 + (part2 * 12) + 12; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 40; }
            else if (props.status.platfType == 'regional' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 57; }
            else if (props.status.platfType == 'regional' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 57 + ((part1 / 1) - 1) * 27; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 57 + (part2 * 27) + 27; }
                }
            }
            else if (props.status.platfType == 'regional' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 165 + ((part1 / 1) - 5) * 13; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 165 + (part2 * 13) + 13; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 61; }
            else if (props.status.platfType == 'national' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 86; }
            else if (props.status.platfType == 'national' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 86 + ((part1 / 1) - 1) * 33; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 86 + (part2 * 33) + 33; }
                }
            }
            else if (props.status.platfType == 'national' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 218 + ((part1 / 1) - 5) * 16; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 218 + (part2 * 16) + 16; }
                }
            }
        }
    }
    else if (props.statevarb.platform == 'flipkart') {
        if (props.status.weightTyp == 'gm') {
            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 500)) { shipfees = 47; }
            else if (props.status.platfType == 'local' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 51; }
            else if (props.status.platfType == 'local' && (weight_select > 1000 && weight_select <= 1500)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1 && (part1/1000) <= 1.5) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000))) { shipfees = 51 + 13; }
                }
            }
            else if (props.status.platfType == 'local' && (weight_select > 1500 && weight_select <= 2000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1.5 && (part1/1000) <= 2) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000)) || (part1/1000)) { shipfees = 64 + 10; }
                }
            }
            else if (props.status.platfType == 'local' && (weight_select > 2000 && weight_select <= 3000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 2 && (part1 / 1000) <= 3) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000)) || (part1/1000)) { shipfees = 74 + 8; }
                }
            }
            else if (props.status.platfType == 'local' && (weight_select > 3000 && weight_select <= 12000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 3) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 82 + ((part1 / 1000) - 3) * 7; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 3; shipfees = 82 + (part2 * 7) + 7; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 500)) { shipfees = 54; }
            else if (props.status.platfType == 'regional' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 73; }
            else if (props.status.platfType == 'regional' && (weight_select > 1000 && weight_select <= 1500)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1 && (part1 / 1000) <= 1.5) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000))) { shipfees = 73 + 17; }
                }
            }
            else if (props.status.platfType == 'regional' && (weight_select > 1500 && weight_select <= 2000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1.5 && (part1 / 1000) <= 2) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000)) || (part1 / 1000)) { shipfees = 90 + 18; }
                }
            }
            else if (props.status.platfType == 'regional' && (weight_select > 2000 && weight_select <= 3000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 2 && (part1 / 1000) <= 3) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000)) || (part1 / 1000)) { shipfees = 108 + 11; }
                }
            }
            else if (props.status.platfType == 'regional' && (weight_select > 3000 && weight_select <= 12000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 3) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 119 + ((part1 / 1000) - 3) * 10; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 3; shipfees = 119 + (part2 * 10) + 10; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 500)) { shipfees = 68; }
            else if (props.status.platfType == 'national' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 94; }
            else if (props.status.platfType == 'national' && (weight_select > 1000 && weight_select <= 1500)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1 && (part1 / 1000) <= 1.5) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000))) { shipfees = 94 + 28; }
                }
            }
            else if (props.status.platfType == 'national' && (weight_select > 1500 && weight_select <= 2000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1.5 && (part1 / 1000) <= 2) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000)) || (part1 / 1000)) { shipfees = 122 + 22; }
                }
            }
            else if (props.status.platfType == 'national' && (weight_select > 2000 && weight_select <= 3000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 2 && (part1 / 1000) <= 3) {
                    if ((part1 / 1000) - Math.floor((part1 / 1000)) || (part1 / 1000)) { shipfees = 144 + 17; }
                }
            }
            else if (props.status.platfType == 'national' && (weight_select > 3000 && weight_select <= 12000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 3) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 161 + ((part1 / 1000) - 3) * 16; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 3; shipfees = 161 + (part2 * 16) + 16; }
                }
            }
        }

        if (props.status.weightTyp == 'kg') {

            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 47; }
            else if (props.status.platfType == 'local' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 51; }
            else if (props.status.platfType == 'local' && (weight_select > 1 && weight_select <= 1.5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1 && (part1 / 1) <= 1.5) {
                    if ((part1 / 1) - Math.floor((part1 / 1))) { shipfees = 51 + 13; }
                }
            }
            else if (props.status.platfType == 'local' && (weight_select > 1.5 && weight_select <= 2)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1.5 && (part1 / 1) <= 2) {
                    if ((part1 / 1) - Math.floor((part1 / 1)) || (part1 / 1)) { shipfees = 64 + 10; }
                }
            }
            else if (props.status.platfType == 'local' && (weight_select > 2 && weight_select <= 3)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 2 && (part1 / 1) <= 3) {
                    if ((part1 / 1) - Math.floor((part1 / 1)) || (part1 / 1)) { shipfees = 74 + 8; }
                }
            }
            else if (props.status.platfType == 'local' && (weight_select > 3 && weight_select <= 12)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 3) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 82 + ((part1 / 1) - 3) * 7; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 3; shipfees = 82 + (part2 * 7) + 7; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 54; }
            else if (props.status.platfType == 'regional' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 73; }
            else if (props.status.platfType == 'regional' && (weight_select > 1 && weight_select <= 1.5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1 && (part1 / 1) <= 1.5) {
                    if ((part1 / 1) - Math.floor((part1 / 1))) { shipfees = 73 + 17; }
                }
            }
            else if (props.status.platfType == 'regional' && (weight_select > 1.5 && weight_select <= 2)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1.5 && (part1 / 1) <= 2) {
                    if ((part1 / 1) - Math.floor((part1 / 1)) || (part1 / 1)) { shipfees = 90 + 18; }
                }
            }
            else if (props.status.platfType == 'regional' && (weight_select > 2 && weight_select <= 3)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 2 && (part1 / 1) <= 3) {
                    if ((part1 / 1) - Math.floor((part1 / 1)) || (part1 / 1)) { shipfees = 108 + 11; }
                }
            }
            else if (props.status.platfType == 'regional' && (weight_select > 3 && weight_select <= 12)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 3) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 119 + ((part1 / 1) - 3) * 10; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 3; shipfees = 119 + (part2 * 10) + 10; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 68; }
            else if (props.status.platfType == 'national' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 94; }
            else if (props.status.platfType == 'national' && (weight_select > 1 && weight_select <= 1.5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1 && (part1 / 1) <= 1.5) {
                    if ((part1 / 1) - Math.floor((part1 / 1))) { shipfees = 94 + 28; }
                }
            }
            else if (props.status.platfType == 'national' && (weight_select > 1.5 && weight_select <= 2)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1.5 && (part1 / 1) <= 2) {
                    if ((part1 / 1) - Math.floor((part1 / 1)) || (part1 / 1)) { shipfees = 122 + 22; }
                }
            }
            else if (props.status.platfType == 'national' && (weight_select > 2 && weight_select <= 3)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 2 && (part1 / 1) <= 3) {
                    if ((part1 / 1) - Math.floor((part1 / 1)) || (part1 / 1)) { shipfees = 144 + 17; }
                }
            }
            else if (props.status.platfType == 'national' && (weight_select > 3 && weight_select <= 12)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 3) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 161 + ((part1 / 1) - 3) * 16; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 3; shipfees = 161 + (part2 * 16) + 16; }
                }
            }
        }
    }
    else if (props.statevarb.platform == 'jiomart') {
        if (props.status.weightTyp == 'gm') {
            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 500)) { shipfees = 38; }
            else if (props.status.platfType == 'local' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 51; }
            else if (props.status.platfType == 'local' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 51 + ((part1 / 1000) - 1) * 15; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 51 + (part2 * 15) + 15; }
                }
            }
            else if (props.status.platfType == 'local' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 111 + ((part1 / 1000) - 5) * 7; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 111 + (part2 * 7) + 7; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 500)) { shipfees = 46; }
            else if (props.status.platfType == 'regional' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 62; }
            else if (props.status.platfType == 'regional' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 62 + ((part1 / 1000) - 1) * 20; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 62 + (part2 * 20) + 20; }
                }
            }
            else if (props.status.platfType == 'regional' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 142 + ((part1 / 1000) - 5) * 8; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 142 + (part2 * 8) + 8; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 500)) { shipfees = 68; }
            else if (props.status.platfType == 'national' && (weight_select > 500 && weight_select <= 1000)) { shipfees = 92; }
            else if (props.status.platfType == 'national' && (weight_select > 1000 && weight_select <= 5000)) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 1) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 92 + ((part1 / 1000) - 1) * 25; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 1; shipfees = 92 + (part2 * 25) + 25; }
                }
            }
            else if (props.status.platfType == 'national' && weight_select > 5000) {
                let part1 = weight_select;
                if ((part1 / 1000) >= 5) {
                    if (Number.isInteger(part1 / 1000)) { shipfees = 192 + ((part1 / 1000) - 5) * 12; }
                    else if ((part1 / 1000) - Math.floor((part1 / 1000))) { let part2 = Math.floor((part1 / 1000)) - 5; shipfees = 192 + (part2 * 12) + 12; }
                }
            }
        }

        if (props.status.weightTyp == 'kg') {

            if (props.status.platfType == 'local' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 38; }
            else if (props.status.platfType == 'local' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 51; }
            else if (props.status.platfType == 'local' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 51 + ((part1 / 1) - 1) * 15; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 51 + (part2 * 15) + 15; }
                }
            }
            else if (props.status.platfType == 'local' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 111 + ((part1 / 1) - 5) * 7; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 111 + (part2 * 7) + 7; }
                }
            }

            if (props.status.platfType == 'regional' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 46; }
            else if (props.status.platfType == 'regional' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 62; }
            else if (props.status.platfType == 'regional' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 62 + ((part1 / 1) - 1) * 20; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 62 + (part2 * 20) + 20; }
                }
            }
            else if (props.status.platfType == 'regional' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 142 + ((part1 / 1) - 5) * 8; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 142 + (part2 * 8) + 8; }
                }
            }

            if (props.status.platfType == 'national' && (weight_select > 0 && weight_select <= 0.5)) { shipfees = 68; }
            else if (props.status.platfType == 'national' && (weight_select > 0.5 && weight_select <= 1)) { shipfees = 92; }
            else if (props.status.platfType == 'national' && (weight_select > 1 && weight_select <= 5)) {
                let part1 = weight_select;
                if ((part1 / 1) >= 1) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 92 + ((part1 / 1) - 1) * 25; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 1; shipfees = 92 + (part2 * 25) + 25; }
                }
            }
            else if (props.status.platfType == 'national' && weight_select > 5) {
                let part1 = weight_select;
                if ((part1 / 1) >= 5) {
                    if (Number.isInteger(part1 / 1)) { shipfees = 192 + ((part1 / 1) - 5) * 12; }
                    else if ((part1 / 1) - Math.floor((part1 / 1))) { let part2 = Math.floor((part1 / 1)) - 5; shipfees = 192 + (part2 * 12) + 12; }
                }
            }
        }
    }

    

    return (
        <div style={props.style}>
            <h2 style={{ fontSize: '30px', color: 'black', textAlign: 'center', }}>Easy ship fees (Rs)</h2>
            <p ref={ coln5} style={{ fontSize: '24px', color: '#136b66', textAlign: 'center', }}>{shipfees}</p>
        </div>
      
    );
}

export default Column5Show;