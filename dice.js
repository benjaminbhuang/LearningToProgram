/**
 * Created by benjaminhuang on 7/15/17.
 */
var die = {
    size: 6,
    totalRolls: 0,
    roll: function(){
        this.totalRolls++;
        return Math.ceil(this.size * Math.random());
    }

}

exports.die= die;
exports.name ="My dice export";