const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flex: 1
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 30,
        color: '#3E00FF'
    },
    titleBold: {
        fontWeight: '900'
    },
    btnClose: {
        marginVertical: 30,
        backgroundColor: '#CD113B',
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
    },
    btnCloseText: {
        color: '#FFF',
        textAlign: 'center',
        fontWeight: '900',
        fontSize: 16,
        textTransform: 'uppercase',
    },
    content: {
        backgroundColor: '#3E00FF',
        marginHorizontal: 30,
        borderRadius: 10,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    view: {
        marginBottom: 10
    },
    label: {
        textTransform: 'uppercase',
        color: '#FFF',
        fontWeight: '600',
        fontSize: 12
    },
    value: {
        fontWeight: '700',
        fontSize: 20,
        color: '#FFF'
    }
})
