AutoForm.addInputType('smalt-addon-icon', {
    template: 'afInputSmaltAddonIcon',
    valueOut: function() {
        return this.val();
    }
});

Template.afInputSmaltAddonIcon.helpers({
    attributes: function () {
        return _.omit(this.atts, ['innerType', 'icon', 'class', 'left']);
    },
    type: function () {
        if (this.atts.innerType) {
            return {
                type: this.atts.innerType
            }
        }
    }
});
